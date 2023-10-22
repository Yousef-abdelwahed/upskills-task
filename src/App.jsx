/** @format */

// import './App.css'
import Footer from "./Components/Footer";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import HowWork from "./Pages/HowWork";
import Recipes from "./Pages/Recipes";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <>
      <Home />
      <HowWork />
      <About />
      <Recipes />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
