
import todo_app from './project-images/todo-app.png';
import seenit from './project-images/seenit-thumbnail.png';
import portfolio from './project-images/portfolio-thumbnail.png';
import bg_pizza from './project-images/bg-pizza-resized.png';
import { Link } from 'react-router-dom';

const projects = [
    {name: "Todo App",              path:"https://github.com/bgrando24/todo-app",               image: todo_app},
    {name: "BG's Pizza",            path:"https://github.com/bgrando24/bg_pizza",               image: bg_pizza},
    {name: "This Website!",         path:"https://github.com/bgrando24/portfolio-2022",         image: portfolio},
    {name: "Reddit Client",         path:"https://amplify.d5uf53b2ji13p.amplifyapp.com/home",   image: seenit},
]

export function Projects() {
    return (
        <div className="my-10 mb-20 pb-20 border border-b-gray-300">

            <h1 className="text-center pt-10 text-3xl font-bold mb-2">My Projects</h1>
            <h2 className='text-center text-lg mb-14'>Websites and applications designed and built by me</h2>

            <div className="flex flex-wrap justify-center h-1/2">
                {
                    projects.map((project, i) => {
                        return (
                            <div 
                                key={i} 
                                className="flex justify-center items-center relative bg-gray-800 rounded-xl h-[300px] w-[600px] m-5"
                                onMouseEnter={() => {
                                    document.getElementById("project-button-"+project.name).style.zIndex = 10;
                                    document.getElementById("project-img-"+project.name).style.opacity = 0;
                                    }} 
                                onMouseLeave={() => {
                                    document.getElementById("project-button-"+project.name).style.zIndex = 0;
                                    document.getElementById("project-img-"+project.name).style.opacity = 100;
                                    }}    
                            >
                            <img key={'img'+i} id={"project-img-"+project.name} alt="" className='absolute rounded-xl h-full w-full z-10 duration-700' src={project.image}/>
                            <ProjectButton key={'button'+i} name={project.name} path={project.path}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

// Component for simplifyting the project button
const ProjectButton = ({ name, path }) => {
    return (
        <a href={path} target="_blank">
            <div className="flex flex-col h-full justify-center items-center z-1">
                <h1 className=" font-bold text-white relative mb-3">{name}</h1>
                <button id={"project-button-"+name} className="text-center text-white bg-blue-600 rounded-lg w-32 h-10 cursor-pointer hover:bg-black duration-200">View Project</button>
            </div>
        </a>
    )
}