
const projects = [
    {name: "Todo App", path: ""},
    {name: "eCommerce Website", path:"" },
    {name: "Reddit Client", path:"" },
    {name: "Restaurant Website", path:"" },
]

export function Projects() {
    return (
        <div className="container mx-auto">

            <h1 className="text-center text-3xl text-bold mb-8">My Projects</h1>

            <div className="flex flex-wrap justify-center">
                {
                    projects.map((project, i) => {
                        return (
                            <div key={i} className="text-center text-lg bg-gray-500 rounded-xl h-40 w-1/3 m-1 hover:opacity-50 transition duration-500">{project.name}</div>
                        )
                    })
                }
            </div>
        </div>
    );
}