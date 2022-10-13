
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
        <div className="container mx-auto bg-white -mt-20 pt-10 h-1/2 rounded-3xl">

            <h1 className="text-center text-3xl text-bold mb-8">Languages</h1>

            <div className="flex flex-wrap justify-center">
                {
                    languages.map((language, i) => {
                        return (
                            <div key={i} className=" bg-gray-200 p-10 mx-1 my-1 h-1/3 w-1/4 hover:scale-105 transition duration-150">{language.name}</div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}