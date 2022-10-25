
import {HiHome} from 'react-icons/hi';
import {MdOutlineMail} from 'react-icons/md';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import './Navbar.css';
import { Tooltip } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function Sidebar() {

    return (
        <div className="fixed top-5 left-1 h-max w-30 flex flex-col text-white z-40">

            <Menutoggle />

            <div id='sidebar' className='-translate-x-32 transition duration-300 ease-in-out'>
                <SidebarIcon icon={<HiHome size="28"                    />} content="Home"                  path="/portfolio-2022"/>
                <SidebarIcon icon={<MdOutlineMail size="28"             />} content="Contact"               path="/contact"/>
                <SidebarIcon icon={<AiOutlineQuestionCircle size="28"   />} content="About this website"    path="/about"/>
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
        <div id='menuArrowDiv' className='relative left-2 cursor-pointer bg-white h-12 w-12 rounded-full' onClick={rotateMenuToggle}>
            <div id="menuArrowTop" className='bg-black w-[1.8rem] h-1 rounded-lg ml-2 mt-[0.9rem] rotate-[35deg] transition duration-300 ease-in-out'></div>
            <div id='menuArrowMiddle' className='bg-black w-4 h-1 rounded-lg ml-1 mt-1 transition duration-300 ease-in-out'></div>
            <div id="menuArrowBottom" className='bg-black w-[1.8rem] h-1 rounded-lg ml-2 mt-1 mb-10 rotate-[-35deg] transition duration-300 ease-in-out'></div>
        </div>
    )
}

// Used to simplify the sidebar menu icons
const SidebarIcon = ({ icon, content, path }) => {
    return (
        <Link to={path}>
            <Tooltip
                content={content}
                placement="right"
                className='px-2'
            >
            <div className='sidebar-icon'>
                {icon}
            </div>
            </Tooltip>
        </Link>
    )
}