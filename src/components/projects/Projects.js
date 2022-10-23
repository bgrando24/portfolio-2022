
import todo_app from './project-images/todo-app.png';
import seenit from './project-images/seenit-thumbnail.png';

const projects = [
    {name: "Todo App",              path:"", image: todo_app},
    {name: "eCommerce Website",     path:"", image: todo_app},
    {name: "Reddit Client",         path:"", image: seenit},
    {name: "Restaurant Website",    path:"", image: todo_app},
]

export function Projects() {
    return (
        <div className="container mx-auto mb-20 rounded-3xl shadow-lg pb-20">

            <h1 className="text-center text-3xl text-bold mb-8">My Projects</h1>

            <div className="flex flex-wrap justify-center h-1/2">
                {
                    projects.map((project, i) => {
                        return (
                            <div 
                                key={i} 
                                className="flex justify-center items-center relative bg-gray-800 border rounded-xl h-40 w-96 min-w-[25%] ml-1 mt-1"
                                onMouseEnter={() => document.getElementById("project-button-"+project.name).style.zIndex = 10} 
                                onMouseLeave={() => document.getElementById("project-button-"+project.name).style.zIndex = 0}    
                            >
                            <img  className='absolute rounded-xl h-full w-full z-10 hover:opacity-0 duration-700' src={project.image}/>
                            <ProjectButton name={project.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

// Component for simplifyting the project button
const ProjectButton = ({ name }) => {
    return (
        <div className="flex flex-col h-full justify-center items-center z-1">
        <h1 className=" font-bold text-white relative mb-3">{name}</h1>
        <button id={"project-button-"+name} className="text-center text-white bg-blue-600 rounded-lg w-32 h-10 cursor-pointer hover:bg-black duration-500">View Project</button>
        </div>
    )
}