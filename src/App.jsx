import {GlobalStyle} from "./Components/GlobalStyle";
import {Header} from './Components/Header';
import {AboutPage} from "./Pages/About";
import {ContactPage} from "./Pages/Contact";
import {ProjectsPage} from "./Pages/Projects";


const App = () => {
  return (
    <div className="App" id="/">
        <GlobalStyle/>
        <Header/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
    </div>
  );
}

export default App;
