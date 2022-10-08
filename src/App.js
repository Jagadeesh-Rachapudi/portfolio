import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import CaseStudy from "./components/caseStudy/CaseStudy";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Hedder from "./components/hedder/Hedder";
import OurClients from "./components/ourClients/OurClients";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Hedder />
      <AboutMe />
      <Services />
      <CaseStudy />
      <Portfolio />
      <Testimonial />
      <OurClients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
