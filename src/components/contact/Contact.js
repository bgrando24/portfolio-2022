
export function Contact() {
    return (
        <div className="container bg-gray-200 py-20 mx-auto border shadow-lg rounded-xl">
            <h1 className="text-center font-bold text-xl">Let's chat!</h1>

            <form method="POST">
                <div className="flex flex-col">
                    <label for="name">Name</label>
                    <input type='text' id='name' name="name" />
                </div>

                <div className="flex flex-col">
                    <label for='email'>Email</label>
                    <input type='email' id='email' name="email" />
                </div>

                <div className="flex flex-col">
                    <label for='message'>Message</label>
                    <input className="h-52" type='textarea' id='message' name='message' />
                </div>

            </form>

        </div>
    )
}


export function GoogleContactForm() {
    return (
        <div className="container mx-auto flex justify-center h-[1250px] bg-white shadow-lg rounded-3xl">
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfu8INDoiPheV0eLIU1NW7Stm0vn_Txj1230Wm6kCNQapRerA/viewform?embedded=true" 
            width='640' frameborder="0" marginheight="0" marginwidth="0">
                Loading…
        </iframe>
        </div>
    )
}

// width="640" height="650" frameborder="0" marginheight="0" marginwidth="0"