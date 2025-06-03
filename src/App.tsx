import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/services/Services";
import UseCase from "./components/use cases/CaseStudies";
import Workpro from './components/Working Process/workingProcess'
import Team from "./components/Team/Team";
const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <UseCase />
      <Workpro />
      <Team />
    </div>
  );
};

export default App;
