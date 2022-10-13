
import {HiHome} from 'react-icons/hi';
import {MdOutlineMail} from 'react-icons/md';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { useState } from 'react';
import './Navbar.css';

export function Sidebar() {

    return (
        <div className="fixed top-0 left-1 h-max w-30 flex flex-col text-white ">

            <Menutoggle />

            <div id='sidebar' className='-translate-x-32 transition duration-300 ease-in-out'>
                <SidebarIcon icon={<HiHome size="28"/>} />
                <SidebarIcon icon={<MdOutlineMail size="28"/>} />
                <SidebarIcon icon={<AiOutlineQuestionCircle size="28"/>} />
            </div>

        </div>
    );
}


const Menutoggle = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    const rotateMenuToggle = () => {
        if (menuOpen) {
            document.getElementById('menuArrowTop').classList.add('menuArrow-top-closed');
            document.getElementById('menuArrowBottom').classList.add('menuArrow-bottom-closed');
            document.getElementById('sidebar').classList.add('open-menu');
            setMenuOpen(!menuOpen);
        } else {
            document.getElementById('menuArrowTop').classList.remove('menuArrow-top-closed');
            document.getElementById('menuArrowBottom').classList.remove('menuArrow-bottom-closed');
            document.getElementById('sidebar').classList.remove('open-menu');
            setMenuOpen(!menuOpen);
        }
    }

    return (
        <div className=' cursor-pointer' onClick={rotateMenuToggle}>
            <div id="menuArrowTop" className='bg-black w-16 h-2 rounded-lg ml-2 mt-10 rotate-[35deg] transition duration-300 ease-in-out'></div>
            <div id="menuArrowBottom" className='bg-black w-16 h-2 rounded-lg ml-2 mt-6 mb-10 rotate-[-35deg] transition duration-300 ease-in-out'></div>
        </div>
    )
}


const SidebarIcon = ({ icon }) => {
    return (
        <div className='sidebar-icon'>
            {icon}
        </div>
    )
}