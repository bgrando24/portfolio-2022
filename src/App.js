import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Welcome } from './components/welcome/Welcome';



function App() {
  return (
    <div className='w-screen h-screen bg-gray-200'>
      <Navbar />
      <Welcome />
      <About />
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
