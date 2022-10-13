// Sticky navbar at top of page

import { useState } from "react";

import './Navbar.css';
import { SideMenu } from "./SideMenu";

export function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const animateHamburger = () => {
        if (menuOpen) {
            document.getElementById("hamburger-top").classList.remove("hamburger-top-open");
            document.getElementById("hamburger-middle").classList.remove("hamburger-middle-open");
            document.getElementById("hamburger-bottom").classList.remove("hamburger-bottom-open");
            setMenuOpen(!menuOpen);

        } else {
            document.getElementById("hamburger-top").classList.add("hamburger-top-open");
            document.getElementById("hamburger-middle").classList.add("hamburger-middle-open");
            document.getElementById("hamburger-bottom").classList.add("hamburger-bottom-open");
            setMenuOpen(!menuOpen);
        }
        
    }

    return (
        <>
            <div onClick={animateHamburger} className=" absolute top-5 right-10 flex flex-col justify-center w-16 h-16 cursor-pointer transition ease-in-out all duration-300">
                <div id="hamburger-top" className=" w-10 h-2 bg-black rounded-md transition ease-in-out duration-300"> </div>
                <div id="hamburger-middle" className=" w-10 h-2 bg-black rounded-md transition ease-in-out duration-300 mt-2"> </div>
                <div id="hamburger-bottom" className=" w-10 h-2 bg-black rounded-md transition ease-in-out duration-300 mt-2"> </div>
            </div>

            <SideMenu menuOpen={menuOpen}/>
        </>
    )
}