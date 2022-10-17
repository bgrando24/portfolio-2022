import { About } from './components/about/About';
import { Contact, GoogleContactForm } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
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
      <GoogleContactForm />
      <Footer />
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
