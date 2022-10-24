import { About } from './pages/home/components/about/About';
import { Contact, GoogleContactForm } from './pages/home/components/contact/Contact';
import { Footer } from './pages/home/components/footer/Footer';
import { Languages } from './pages/home/components/languages/Languages';
import { Sidebar } from './pages/home/components/navbar/Sidebar';
import { Projects } from './pages/home/components/projects/Projects';
import { Welcome } from './pages/home/components/welcome/Welcome';



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
