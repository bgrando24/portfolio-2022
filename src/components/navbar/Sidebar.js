
import {HiHome} from 'react-icons/hi';
import {MdOutlineMail} from 'react-icons/md';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import './Navbar.css';

export function Sidebar() {

    return (
        <div className="fixed top-1 left-1 h-max w-30 flex flex-col text-white">

            <Menutoggle />

            <div id='sidebar' className='-translate-x-32 transition duration-300 ease-in-out'>
                <SidebarIcon icon={<HiHome size="28"/>} />
                <SidebarIcon icon={<MdOutlineMail size="28"/>} />
                <SidebarIcon icon={<AiOutlineQuestionCircle size="28"/>} />
            </div>

        </div>
    );
}


export const Menutoggle = () => {

    // handles controlling whether the menu is 'open' or not
    const [menuOpen, setMenuOpen] = useState(true);

    // applies custom CSS classes to create the side menu animation
    const rotateMenuToggle = () => {
        if (menuOpen) {
            document.getElementById('menuArrowTop').classList.add('menuArrow-top-closed');
            document.getElementById('menuArrowMiddle').classList.add('menuArrow-middle-closed');
            document.getElementById('menuArrowBottom').classList.add('menuArrow-bottom-closed');
            document.getElementById('sidebar').classList.add('open-menu');
            setMenuOpen(!menuOpen);
        } else {
            document.getElementById('menuArrowTop').classList.remove('menuArrow-top-closed');
            document.getElementById('menuArrowMiddle').classList.remove('menuArrow-middle-closed');
            document.getElementById('menuArrowBottom').classList.remove('menuArrow-bottom-closed');
            document.getElementById('sidebar').classList.remove('open-menu');
            setMenuOpen(!menuOpen);
        }
    }

    return (
        <div id='menuArrowDiv' className=' cursor-pointer transition opacity-0 duration-300' onClick={rotateMenuToggle}>
            <div id="menuArrowTop" className='bg-black w-8 h-1 rounded-lg ml-2 mt-10 rotate-[35deg] transition duration-300 ease-in-out'></div>
            <div id='menuArrowMiddle' className='bg-black w-4 h-1 rounded-lg ml-1 mt-1 transition duration-300 ease-in-out'></div>
            <div id="menuArrowBottom" className='bg-black w-8 h-1 rounded-lg ml-2 mt-1 mb-10 rotate-[-35deg] transition duration-300 ease-in-out'></div>
        </div>
    )
}

// Used to simplify the sidebar menu icons
const SidebarIcon = ({ icon }) => {
    return (
        <div className='sidebar-icon'>
            {icon}
        </div>
    )
}