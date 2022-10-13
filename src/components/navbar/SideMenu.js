
export function SideMenu( { menuOpen } ) {
    if (menuOpen) {
        return (
            <div className=" fixed -right-40 top-24 h-1/2 w-80 flex flex-col items-center transition ease-in-out duration-500 -translate-x-32 bg-gray-500">
                <p>hello</p>
                <p>Home</p>
                <p>About</p>
            </div>
        )
        
    } else {
        return (
            <div></div>
        )
    }
    
}