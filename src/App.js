import { About } from './pages/home/components/about/About';
import { Contact, GoogleContactForm } from './pages/home/components/contact/Contact';
import { Footer } from './pages/home/components/footer/Footer';
import { Languages } from './pages/home/components/languages/Languages';
import { Sidebar } from './pages/home/components/navbar/Sidebar';
import { Projects } from './pages/home/components/projects/Projects';
import { Welcome } from './pages/home/components/welcome/Welcome';

// react router
import { BrowserRouter as Router, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ContactPage } from './pages/contact/components/ContactPage';
import { AboutWebiste } from './pages/about-website/components/AboutWebsite';


function App() {
  return (
    <div className='w-screen h-screen bg-gray-200'>

      

      <HashRouter>

      <Sidebar />

        <Routes>
        
          <Route path='/' element={<Navigate to='/portfolio-2022' />} />

          <Route path='/portfolio-2022' element={
            <>
              <Welcome />
              <About />
              <Languages />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />

          <Route path='/contact' element={
            <ContactPage />
          } />

          <Route path='/about' element={
            <AboutWebiste />
          } />

        </Routes>

      </HashRouter>

      
     

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
