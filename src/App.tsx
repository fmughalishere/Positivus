import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/services/Services";
import UseCase from "./components/use cases/CaseStudies";
import Workpro from './components/Working Process/workingProcess';
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactUs from "./components/Contact Us/ContactUs";
import Blogs from "./pages/Blog";
import Pricing from "./pages/Pricing";
const HomePage = () => (
  <>
    <About />
    <Services />
    <UseCase />
    <Workpro />
    <Team />
    <Testimonials />
    <ContactUs />
  </>
);

const AboutPage = () => (
  <>
    <About />
  </>
);

const ServicesPage = () => (
  <>
    <Services />
  </>
);

const UseCases = () => (
  <>
    <UseCase />
  </>
)
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
