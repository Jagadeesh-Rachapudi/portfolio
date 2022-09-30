import "./App.css";
import About_Me from "./components/About_Me";
import Case_Study from "./components/Case_Study";
import Contact_Us from "./components/Contact_Us";
import Footer from "./components/Footer";
import Hedder from "./components/Hedder";
import Navbar from "./components/Navbar";
import Our_Clients from "./components/Our_Clients";
import Portfolio from "./components/Portfolio";
import Profile_Card_In_Hedder_Section from "./components/Profile_Card_In_Hedder_Section";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="body">
      <Navbar />
      {/* <Profile_Card_In_Hedder_Section /> */}
      <Hedder />
      <About_Me />
      <Services />
      <Case_Study />
      <Portfolio />
      <Testimonial />
      <Our_Clients />
      <Contact_Us />
      <Footer />
    </div>
  );
}

export default App;
