import { Navbar } from './components/navbar/Navbar';
import { Welcome } from './components/welcome/Welcome';

function App() {
  return (
    <div className='w-screen h-screen bg-gray-200'>
      <Navbar />
      <Welcome />
    </div>  
  );
}


// General structure:
/**
 * Welcome
 * About me
 * Skills
 * Projects
 * Contact
 */

export default App;
