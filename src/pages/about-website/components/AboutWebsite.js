
export function AboutWebiste() {
    return (
        <div className="py-20 text-center">
            <h1 className="text-3xl font-bold">My portfolio website</h1>

            <div className="container bg-white mx-auto my-5 py-2 w-[95%] h-96 rounded-lg shadow">

                <div className="flex flex-col mx-auto w-[95%] max-w-[700px]">

                    <p>
                        This website was created not only as a place to display my web development portfolio, 
                            but also as a demonstration of my front-end design and development skills.
                    </p>

                    <p className="my-5">
                        The website is built using primarily React and Tailwind, but also utilises vanilla JavaScript and CSS.
                         Development occured in a Node environment with the production build hosted via GitHub Pages.
                         Git and GitHub were used extensively for version control and deploying the production build. 
                    </p>

                </div>
                
            </div>
            
        </div>
    )
}