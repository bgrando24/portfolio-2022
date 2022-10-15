import { Menutoggle } from "../navbar/Sidebar";
import { Avatar } from "./Avatar";

export function About() {
    return (
        <div>
        <Avatar />

            <div className="flex flex-col items-center mx-auto bg-blue-600 text-white h-2/3 mt-10">
                <h1 className=" font-bold text-center text-4xl pt-20">Hi, my name is Brandon.</h1>
                <h4 className="text-center mt-4 text-lg w-3/4 mb-32">
                    I'm a Full Stack web developer located in Victoria, Australia.
                    I come from a corporate finance background and fell in love with programming in 2020.
                    <br />
                    I'm naturally curious, self-motivated and am always working to improve my knowledge and skills.
                </h4>
            </div>
        </div>
    );
}