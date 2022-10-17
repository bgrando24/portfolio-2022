import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"



export function Footer() {
    return (
        <footer className="flex flex-col items-center py-10 w-screen h-auto bg-blue-600">
            <SocialsHeader />
            
                <div className="flex justify-center mt-20">
                    <SocialIcon 
                        link="https://github.com/bgrando24" 
                        icon={<AiFillGithub size="50"/>} />
                    <SocialIcon 
                        link="https://au.linkedin.com/in/brandon-grando-388437192" 
                        icon={<AiFillLinkedin size="50" />} />
                </div>

                <p className="pt-10 font-bold opacity-50">Brandon Grando <span>&copy;</span> 2022</p>

            </footer>
    )
}


const SocialsHeader = () => {
    return (
        <div className="container mx-auto h-32 -mt-28 bg-black rounded-2xl">
        <h1 className="text-white p-10 text-2xl text-center">Check out my socials</h1>
        </div>
    )
}


const SocialIcon = ({ icon, link }) => {

    return (
        <a href={link} target="_blank" className="px-1 hover:scale-125 duration-200">
            {icon}
        </a>
    )
} 