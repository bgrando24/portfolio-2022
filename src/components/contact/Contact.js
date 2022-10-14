
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