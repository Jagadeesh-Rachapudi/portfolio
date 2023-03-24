import React, { Fragment, useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IAddress } from './Address'

import axios from 'axios'
import { IStore } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  toastMessage,
  defaultAutocompleteCountries,
  getDefaultCountry,
} from '../../common/utils'
//validator
import {
  stringValidate,
  notValidate,
  numberValidate,
  stringValidateWithTrim,
  isStringWithTrim,
  postCodeValidate,
} from '../../common/validator'
//Google Places API
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import loadGMaps from '../../common/loadGoogleMapScripts'
import { updateViewPage } from '../../redux/actions/viewPageActions'
import { IModalLink } from '../Login/Login'
import ValidateCustomer from '../../common/ValidateCustomer'
import {
  getAddressSuggestionsWithPostcodes,
  IAddressSuggestion,
} from '../Checkout/Elements/AddressLookup'
import classNames from 'classnames'

interface IProps {
  setShowForm?: Function
  curAddress: IAddress
  addForm: boolean
  setUpdatedAddress: Function
  addressEndPoint: string
  countries?: {
    name: string
    value: string
  }[]
  loginLink?: IModalLink
  comingFrom?: String
}

const Address = ({
  setShowForm,
  curAddress,
  addForm,
  setUpdatedAddress,
  addressEndPoint,
  countries,
  loginLink,
  comingFrom,
}: IProps) => {
  const userState = useSelector((state: IStore) => state.user)
  const organisationState = useSelector((state: IStore) => state.organisation)
  const dispatch = useDispatch()
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [addressNotListed, setAddressNotListed] = useState(
    addForm
      ? true
      : curAddress && curAddress.latitude && curAddress.latitude.length > 0
        ? true
        : false
  )

  const [country, setCountry] = useState(
    curAddress?.country || getDefaultCountry(organisationState)
  )
  const viewPageState = useSelector((store: IStore) => store.viewPage)
  const [adressSuggestions, setAddressSuggestions] = useState<
    Array<IAddressSuggestion>
  >([])

  //Validation field
  const schema = yup.object().shape({
    firstName: yup.lazy((_value) => {
      return stringValidateWithTrim('First Name')
    }),
    lastName: yup.lazy((_value) => {
      return stringValidateWithTrim('Last Name')
    }),
    addressText: yup.lazy((_value) => {
      return addressNotListed &&
        defaultAutocompleteCountries.includes(country) &&
        ((country != 'AU' && country != 'NZ') ||
          !process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY)
        ? stringValidate('Address')
        : notValidate()
    }),
    addressFinderText: yup.lazy((_value) => {
      return addressNotListed &&
        defaultAutocompleteCountries.includes(country) &&
        (country === 'AU' || country === 'NZ') &&
        process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY
        ? stringValidate('Address')
        : notValidate()
    }),
    address1: yup.lazy((_value) => {
      return addressNotListed && defaultAutocompleteCountries.includes(country)
        ? notValidate()
        : stringValidateWithTrim('Address1')
    }),
    address2: yup.lazy((_value) => {
      return notValidate()
    }),
    suburb: yup.lazy((_value) => {
      return addressNotListed && defaultAutocompleteCountries.includes(country)
        ? notValidate()
        : isStringWithTrim('Suburb')
    }),
    state: yup.lazy((_value) => {
      return addressNotListed && defaultAutocompleteCountries.includes(country)
        ? notValidate()
        : isStringWithTrim('State')
    }),
    country: yup.lazy((_value) => {
      return addressNotListed && defaultAutocompleteCountries.includes(country)
        ? notValidate()
        : isStringWithTrim('Country')
    }),
    postcode: yup.lazy((_value) => {
      return addressNotListed && defaultAutocompleteCountries.includes(country)
        ? notValidate()
        : postCodeValidate('Postcode',country)
    }),
  })
  const { register, handleSubmit, errors } = useForm<IAddress>({
    resolver: yupResolver(schema),
  })
  //validation end

  const updateAdd = async (data: IAddress) => {
    if (
      addressNotListed &&
      defaultAutocompleteCountries.includes(country) &&
      (country === 'AU' || country === 'NZ') &&
      process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY
    ) {
      data.addressText = data.addressFinderText
    }
    if (
      (data.addressText || data.address1) &&
      (data.postcode || curAddress.postcode)
    ) {
      data.address1 = data.addressText ? curAddress.address1 : data.address1
      data.address2 = data.addressText ? curAddress.address2 : data.address2
      data.suburb = data.addressText ? curAddress.suburb : data.suburb
      data.state = data.addressText ? curAddress.state : data.state
      data.country = country
      data.postcode = data.addressText ? curAddress.postcode : data.postcode
      data.latitude = data.addressText ? curAddress.latitude : data.latitude
      data.longitude = data.addressText ? curAddress.longitude : data.longitude
    } else {
      toastMessage(false, 'Sorry, the address you entered is not valid.')
      return
    }
    setFormSubmitting(true)
    if (!data.addressText) {
      data.latitude = ''
      data.longitude = ''
    }
    data.addressType =
      comingFrom === 'cartShipping' ||
      curAddress?.isDefaultShipping?
      'Shipping': comingFrom === 'cartBilling' ||
      curAddress?.isDefaultBilling ? 'Billing'
      : 'other'
    data.isDefault =
      comingFrom === 'cartShipping' ||
        curAddress?.isDefaultBilling ||
        comingFrom === 'cartBilling' ||
        curAddress?.isDefaultShipping
        ? true
        : false
    let parameterHeader: any = {
      customerAccessToken: userState?.customerAccessToken || '',
      customerId: userState?.customerId || '',
    }
    if (!addForm) {
      parameterHeader['addressid'] = curAddress.id
    }
    await axios({
      method: addForm ? 'post' : 'put',
      url: addressEndPoint,
      data: data,
      headers: parameterHeader,
    })
      .then((response) => {
        setFormSubmitting(false)
        if (response.status === 200 && response.data) {
          if (
            response.data.errors &&
            response.data.errors[0] &&
            response.data.errors[0].code === 'AccessDenied'
          ) {
            dispatch(
              updateViewPage({
                viewPage: false,
              })
            )
          } else {
            toastMessage(true, response.data?.message || 'Success!')
            setUpdatedAddress(response.data.addresses)
            setFormSubmitting(false)
            setShowForm && setShowForm(false)
          }
        } else {
          toastMessage(
            false,
            response.data?.message ||
            'Sorry, we were unable to load your profile. Please refresh the page or contact us for assistance.'
          )
        }
      })
      .catch(() => {
        setFormSubmitting(false)
        toastMessage(
          false,
          'Something went wrong. Please refresh page and try again.'
        )
      })
  }

  //Google Map/Places API Start
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: {
        country: [country],
      },
    },
    cache: false,
    defaultValue:
      (curAddress &&
        curAddress.latitude &&
        curAddress.latitude.length > 0 &&
        curAddress.addressText) ||
      '',
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
    curAddress.address1 = ''
    curAddress.address2 = ''
    curAddress.suburb = ''
    curAddress.state = ''
    curAddress.postcode = ''
  }

  const setFormatCurrentAddress = (type: string, longName: string) => {
    switch (type) {
      case 'subpremise':
        return (curAddress.address1 = `${longName}/`)
      case 'street_number':
        return (curAddress.address1 = `${curAddress.address1}${longName} `)
      case 'route':
        return (curAddress.address1 = `${curAddress.address1}${longName}`)
      case 'political':
        return (curAddress.suburb = curAddress.suburb
          ? curAddress.suburb
          : `${longName}`)
      case 'locality':
        return (curAddress.suburb = curAddress.suburb
          ? curAddress.suburb
          : `${longName}`)
      case 'administrative_area_level_1':
        return (curAddress.state = longName)
      case 'postal_code':
        return (curAddress.postcode = longName)

      default:
        return ''
    }
  }

  const handleSelect = (val: string): void => {
    const parameter = {
      address: val,
    }

    getGeocode(parameter)
      .then((details) => {
        if (details?.[0] && details?.[0].address_components) {
          details[0].address_components.forEach((_d: any) => {
            setFormatCurrentAddress(_d.types?.[0], _d.long_name)
          })
        }
        curAddress.addressText = val
        const { lat, lng } = getLatLng(details?.[0]);

        curAddress.latitude = lat.toString()
        curAddress.longitude = lng.toString()

        if (!curAddress.postcode) {
          setValue('', false)
          toastMessage(
            false,
            'Sorry, the address you entered is invalid. Please update and try again.'
          )
          return
        }
      })
      .catch(() => { })
    setValue(val, false)
  }

  const getSuggestions = async () => {
    const suggestions = await getAddressSuggestionsWithPostcodes(data)
    setAddressSuggestions(suggestions)
  }

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    loadGMaps(() => {
      setLoaded(true)
    })
  })

  useEffect(() => {
    getSuggestions()
  }, [data])
  //Google Map/Places API End
  const addressChange = () => {
    setAddressNotListed(!addressNotListed)
    if (addressNotListed) {
      curAddress.address1 = ''
      curAddress.address2 = ''
      curAddress.suburb = ''
      curAddress.state = ''
      curAddress.postcode = ''
    } else {
      setValue('', false)
    }
  }

  // Addfress Finder Start
  let widgets: any = {
    AU: null,
    NZ: null,
  }

  const disableWidgets = () => {
    widgets['AU']?.disable()
    widgets['NZ']?.disable()
  }

  const setWidgetState = () => {
    disableWidgets() // disable both widgets first

    const countryCode = (document.getElementById(
      'country'
    ) as HTMLSelectElement)!.value
    if (countryCode === 'AU' || countryCode === 'NZ') {
      loadWidgets()
      // selectively enable the right widget
      widgets[countryCode]?.enable()
    }
  }

  const autoFillFieldsByCountry = (widget: any, countryCode: string) => {
    switch (countryCode) {
      case 'AU':
        widget.on('result:select', function (fullAddress: any, metaData: any) {
          curAddress.address1 = metaData.address_line_1
          curAddress.address2 = metaData.address_line_2
          curAddress.suburb = metaData.locality_name
          curAddress.state = metaData.state_territory
          curAddress.postcode = metaData.postcode
          curAddress.country = 'AU'
          curAddress.latitude = metaData.latitude
          curAddress.longitude = metaData.longitude
          curAddress.addressText = `${fullAddress}, Australia`
        })
        break
      case 'NZ':
        widget.on('result:select', function (fullAddress: any, metaData: any) {
          curAddress.address1 = metaData.address_line_1
          curAddress.address2 = metaData.address_line_2 || ''
          curAddress.suburb = metaData.selected_suburb
          curAddress.state = metaData.selected_city
          curAddress.postcode = metaData.postcode
          curAddress.country = 'NZ'
          curAddress.latitude = metaData.latitude
          curAddress.longitude = metaData.longitude
          curAddress.addressText = `${fullAddress}, New Zealand`
        })
        break
    }
  }

  const loadWidgets = () => {
    widgets['AU'] = new (window as any).AddressFinder.Widget(
      document.getElementById('address_text'),
      process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY,
      'AU',
      {
        address_params: {
          gnaf: 1,
        },
        max_results: 5,
        empty_content:
          'No addresses were found. This could be a new address, or you may need to check the spelling.',
      }
    )
    autoFillFieldsByCountry(widgets['AU'], 'AU')

    widgets['NZ'] = new (window as any).AddressFinder.Widget(
      document.getElementById('address_text'),
      process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY,
      'NZ',
      {
        address_params: {
          post_box: 0,
          rural: 0,
        },
        max_results: 5,
        empty_content:
          'No addresses were found. This could be a new address, or you may need to check the spelling.',
      }
    )
    autoFillFieldsByCountry(widgets['NZ'], 'NZ')
  }

  const initWidgets = () => {
    loadWidgets()
    setWidgetState() // Set the initial state for the form
    document
      .getElementById('country')!
      .addEventListener('change', setWidgetState)
  }

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY
    )
      return
    const existingScript = document.getElementById('addressFinderWidget')
    if (existingScript) {
      initWidgets()
      return
    }
    let script = document.createElement('script')
    script.src = 'https://api.addressfinder.io/assets/v3/widget.js'
    script.id = 'addressFinderWidget'
    script.async = true
    script.onload = initWidgets
    document.body.appendChild(script)

    return () => {
      document
        .getElementById('country')
        ?.removeEventListener('change', setWidgetState)
    }
  }, [])
  // Address Finder End

  return (
    <div className='address-form'>
      <ValidateCustomer loginLink={loginLink} />
      {viewPageState?.viewPage === true ? (
        <Fragment>
          <div className='title'>
            {addForm ? 'Add Address' : 'Edit Address'}
          </div>
          <div className='sub-heading'>Address Details</div>
          <div className='review-form'>
            <Form
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit(updateAdd)}>
              <Form.Group className='review-form-group'>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type='text'
                  name='companyName'
                  defaultValue={(curAddress && curAddress.companyName) || ''}
                  ref={register}
                />
              </Form.Group>
              <Form.Group className='review-form-group'>
                <Form.Label className='required'>First Name*</Form.Label>
                <Form.Control
                  type='text'
                  name='firstName'
                  defaultValue={(curAddress && curAddress.firstName) || ''}
                  ref={register}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type='invalid' className='error-message'>
                  {errors.firstName?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='review-form-group'>
                <Form.Label className='required'>Last Name*</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  defaultValue={(curAddress && curAddress.lastName) || ''}
                  ref={register}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type='invalid' className='error-message'>
                  {errors.lastName?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='checkout-form-group'>
                <Form.Label className='required'>Country</Form.Label>
                <Form.Control
                  as='select'
                  name='country'
                  id='country'
                  onChange={(_e) => setCountry(_e.target.value)}
                  value={country}
                  ref={register}
                  className='select-options'>
                  {organisationState?.restrictedCountries &&
                    organisationState.restrictedCountries.length > 0 ? (
                    <Fragment>
                      {organisationState.restrictedCountries
                        .filter(Boolean)
                        .map(
                          (
                            country: { [key: string]: string },
                            index: number
                          ) => (
                            <option value={country.code} key={index}>
                              {country.label}
                            </option>
                          )
                        )}
                    </Fragment>
                  ) : (
                    <option value='AU'>Australia</option>
                  )}
                </Form.Control>
                <Form.Control.Feedback type='invalid' className='error-message'>
                  {errors.country?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className={classNames('review-form-group', {
                  'hide-group':
                    (country != 'AU' && country != 'NZ') ||
                    !process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY,
                })}>
                <Form.Label className='required'>Address*</Form.Label>
                <Fragment>
                  <Form.Control
                    type='text'
                    name='addressFinderText'
                    id='address_text'
                    defaultValue={(curAddress && curAddress.addressText) || ''}
                    ref={register}
                    isInvalid={!!errors.addressFinderText}
                    autoComplete='disable-autocomplete'
                  />
                  <Form.Control.Feedback
                    type='invalid'
                    className='error-message'>
                    {errors.addressFinderText?.message}
                  </Form.Control.Feedback>
                </Fragment>
              </Form.Group>
              {addressNotListed &&
                defaultAutocompleteCountries.includes(country) &&
                ((country != 'AU' && country != 'NZ') ||
                  !process.env.NEXT_PUBLIC_ADDRESS_FINDER_KEY) && (
                  <Form.Group className='review-form-group'>
                    <Form.Label className='required'>Address*</Form.Label>
                    <Fragment>
                      {loaded ? (
                        <Fragment>
                          <Combobox
                            onSelect={handleSelect}
                            aria-labelledby='demo'>
                            <ComboboxInput
                              className='form-control'
                              value={value}
                              onChange={handleInput}
                              onPaste={handleInput}
                              disabled={!ready}
                              name='addressText'
                              ref={register}
                              autoComplete={'googlemap'}
                            />
                            <ComboboxPopover>
                              <ComboboxList>
                                {status === 'OK' && (
                                  <div className='google-addr-list'>
                                    {adressSuggestions.map((suggestion) => (
                                      <ComboboxOption
                                        key={suggestion.placeId}
                                        value={suggestion.text}
                                      />
                                    ))}
                                  </div>
                                )}
                              </ComboboxList>
                            </ComboboxPopover>
                          </Combobox>
                          {(!(value.length > 0) || !(status === 'OK')) && (
                            <div className='error-message address-required'>
                              {errors.addressText?.message}
                            </div>
                          )}
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Form.Control
                            type='text'
                            name='addressText'
                            defaultValue={
                              (curAddress && curAddress.addressText) || ''
                            }
                            ref={register}
                            isInvalid={!!errors.addressText}
                          />
                          <Form.Control.Feedback
                            type='invalid'
                            className='error-message'>
                            {errors.address1?.message}
                          </Form.Control.Feedback>
                        </Fragment>
                      )}
                    </Fragment>
                    <div
                      className='desc'
                      dangerouslySetInnerHTML={{
                        __html:
                          '<div style="font-size:14px;"><br>eg. 1/23 Example Street MELBOURNE VIC 3000<br><br>(Note: we do not deliver to PO Boxes, Parcel Lockers or Private/Locked Bags)</div>',
                      }}></div>
                  </Form.Group>
                )}
              {defaultAutocompleteCountries.includes(country) && (
                <Form.Group className='review-form-group pb-2'>
                  <Form.Label
                    className='required underline mouse-pointer'
                    onClick={() => {
                      addressChange()
                    }}>
                    {addressNotListed
                      ? 'Address not listed? Enter manually'
                      : 'Search for address'}
                  </Form.Label>
                </Form.Group>
              )}

              {!addressNotListed ||
                !defaultAutocompleteCountries.includes(country) ? (
                <Fragment>
                  <Form.Group className='review-form-group'>
                    <Form.Label className='required'>Address 1*</Form.Label>
                    <Form.Control
                      type='text'
                      name='address1'
                      defaultValue={(curAddress && curAddress.address1) || ''}
                      ref={register}
                      isInvalid={!!errors.address1}
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className='error-message'>
                      {errors.address1?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='review-form-group'>
                    <Form.Label className='required'>Address 2</Form.Label>
                    <Form.Control
                      type='text'
                      name='address2'
                      defaultValue={(curAddress && curAddress.address2) || ''}
                      ref={register}
                      isInvalid={!!errors.address2}
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className='error-message'>
                      {errors.address2?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='review-form-group'>
                    <Form.Label className='required'>
                      {country === 'AU' ? 'Suburb *' : 'City *'}
                    </Form.Label>
                    <Form.Control
                      type='text'
                      name='suburb'
                      defaultValue={(curAddress && curAddress.suburb) || ''}
                      ref={register}
                      isInvalid={!!errors.suburb}
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className='error-message'>
                      {errors.suburb?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='review-form-group'>
                    <Form.Label className='required'>{`${defaultAutocompleteCountries.includes(country)
                      ? 'State'
                      : 'State/Region'
                      }*`}</Form.Label>
                    {country === 'AU' && organisationState?.states?.length ? (
                      <Form.Control
                        as='select'
                        name='state'
                        ref={register}
                        className='select-options'
                        defaultValue={(curAddress && curAddress.state) || ''}>
                        {[
                          { label: 'Select a state', code: '' },
                          ...organisationState.states,
                        ]
                          .filter(Boolean)
                          .map(
                            (
                              state: { [key: string]: string },
                              index: number
                            ) => (
                              <option value={state.code} key={index}>
                                {state.label}
                              </option>
                            )
                          )}
                      </Form.Control>
                    ) : (
                      <Form.Control
                        type='text'
                        name='state'
                        defaultValue={(curAddress && curAddress.state) || ''}
                        ref={register}
                        isInvalid={!!errors.state}
                      />
                    )}
                    <Form.Control.Feedback
                      type='invalid'
                      className='error-message'>
                      {errors.state?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='review-form-group'>
                    <Form.Label className='required'>
                      {country === 'AU' || country === 'NZ'
                        ? 'Postcode *'
                        : 'Zipcode *'}
                    </Form.Label>
                    <Form.Control
                      type='text'
                      name='postcode'
                      defaultValue={(curAddress && curAddress.postcode) || ''}
                      ref={register}
                      isInvalid={!!errors.postcode}
                    />
                    <Form.Control.Feedback
                      type='invalid'
                      className='error-message'>
                      {errors.postcode?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Fragment>
              ) : null}
              <Form.Group className='review-form-group pb-3'>
                <button
                  type='submit'
                  className='btn submit-btn pointer-events-auto cursor-pointer'
                  disabled={formSubmitting}>
                  {formSubmitting ? (
                    <Spinner
                      as='span'
                      animation='border'
                      role='status'
                      aria-hidden='true'
                    />
                  ) : addForm ? (
                    'Save'
                  ) : (
                    'Update'
                  )}
                </button>
                <button
                  className='btn cancel-btn'
                  onClick={() => {
                    setShowForm && setShowForm(false)
                  }}>
                  Cancel
                </button>
              </Form.Group>
            </Form>
          </div>
        </Fragment>
      ) : null}
    </div>
  )
}

export default Address
