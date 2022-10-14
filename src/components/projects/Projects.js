
import img from './project-images/wfdesignbuild.png';

const projects = [
    {name: "Todo App", path: ""},
    {name: "eCommerce Website", path:"" },
    {name: "Reddit Client", path:"" },
    {name: "Restaurant Website", path:"" },
]

export function Projects() {
    return (
        <div className="container mx-auto mb-20">

            <h1 className="text-center text-3xl text-bold mb-8">My Projects</h1>

            <div className="flex flex-wrap justify-center h-1/2">
                {
                    projects.map((project, i) => {
                        return (
                            <div key={i} className="flex justify-center items-center relative bg-gray-800 border rounded-xl h-40 w-96 min-w-[25%] ml-1 mt-1">
                            <img className='absolute rounded-xl h-full w-full z-10 hover:opacity-0 duration-700' src={img}/>
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
        <button className="text-center text-white bg-blue-600 rounded-lg w-32 h-10 hover:bg-black duration-500">View Project</button>
        </div>
    )
}