import { About } from './components/about/About';
import { Languages } from './components/languages/Languages';
import { Navbar } from './components/navbar/Navbar';
import { Menutoggle, Sidebar } from './components/navbar/Sidebar';
import { Projects } from './components/projects/Projects';
import { Welcome } from './components/welcome/Welcome';



function App() {
  return (
    <div className='w-screen h-screen bg-gray-200'>
      {/* <Navbar /> */}
      <Sidebar />
      <Welcome />
      <About />
      <Languages />
      <Projects />
    </div>  
  );
}


// General structure:
/**
 * Navbar
 * Welcome
 * About me
 * Skills
 * Projects
 * Contact
 */

export default App;
