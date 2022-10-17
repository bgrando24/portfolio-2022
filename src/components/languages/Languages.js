import { Tooltip } from "@material-tailwind/react"

const languages = [
    {name: "JavaScript", description: "Use of JavaScript to build dynamic and interactive websites following ES6 standards"},
    {name: "HTML5", description: "Clean, simple and effective use of HTML to structure frontend designs"},
    {name: "CSS", description: "Use of raw CSS and tools such as Tailwind to create clean and visually appealing interfaces"},
    {name: "React", description: "Use of functional components and React hooks to develop a clean and consistent frontend"},
    {name: "Node", description: "Used in full-stack applications I have developed, primarily in running instances of Express.js for backends"},
    {name: "Express", description: "Secure and functional sever instances with Express to create full-stack applications, including interfacing with databases"},
    {name: "PostgreSQL", description: "Use of both raw SQL statements and integration with Express to effectively create, read, update and delete data"},
    {name: "GitHub", description: "Use of Github for both version control and for cross-platform development between different devices"},
    {name: "CLI", description: "Use of MacOS and Windows terminal for version control, running scripts and other development functions"},
    {name: "C++", description: "While not part of my primary stack, I have used C++ to develop small CLI and graphical applications"}
]

export function Languages() {
    return (
        <div className="container mx-auto h-auto bg-white -mt-20 py-10 mb-20 rounded-3xl shadow-xl">

            <h1 className="text-center text-3xl text-bold mb-8">The tech I've learnt</h1>

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
                            className='px-2 text-center'
                            >
                                <div className="flex justify-center items-center bg-gray-200 font-bold shadow w-40 min-w-[25%] h-20 m-1 rounded hover:scale-110 transition duration-200">
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

