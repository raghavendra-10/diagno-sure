import "./App.css";
import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Home from "./sections/Home";
import HowItWorks from "./sections/HowItWorks";
import Partner from "./sections/Partner";
import Tagline from "./sections/Tagline";
import "./App.css";


function App() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Navbar />
      <Home />
      <HowItWorks />
      <Features />
      <Partner />
      <Form />
      <Tagline />
      <Footer/>
    </div>
  );
}

export default App;
