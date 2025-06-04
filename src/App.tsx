import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/services/Services";
import UseCase from "./components/use cases/CaseStudies";
import Workpro from './components/Working Process/workingProcess'
import Team from "./components/Team/Team";
import Testimonials from "./components/Testinomials/Testinomials";
const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <UseCase />
      <Workpro />
      <Team />
      <Testimonials />
    </div>
  );
};

export default App;
