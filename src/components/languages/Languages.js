import { Tooltip } from "@material-tailwind/react"

const languages = [
    {name: "JavaScript", description: "Use of JavaScript to build dynamic and interactive websites following ES6 standards"},
    {name: "HTML5", description: ""},
    {name: "CSS", description: ""},
    {name: "React.js", description: ""},
    {name: "Node.js", description: ""},
    {name: "Express.js", description: ""},
]

export function Languages() {
    return (
        <div className="container mx-auto h-auto bg-white -mt-20 pt-10 mb-20 rounded-3xl">

            <h1 className="text-center text-3xl text-bold mb-8">Languages</h1>

            <div className="flex flex-wrap justify-center">
                {
                    languages.map((language, i) => {
                        return (
                            <Tooltip
                            content={language.description}
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            >
                                <div className="flex justify-center items-center bg-gray-200 shadow w-1/4 h-20 m-1 hover:scale-110 transition duration-200">
                                    <div key={i}>{language.name}</div>   
                                </div>
                            </Tooltip>
                        )
                    })
                }
            </div>
            
        </div>
    )
}


