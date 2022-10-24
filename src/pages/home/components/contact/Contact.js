import { useState } from "react"

export function Contact() {
    // States used to hold the email subject and body strings for encoding on submit
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");


    // handles encoding the subject and body strings and submits to email
    const handleContactSubmit = (e) => {

        e.preventDefault();

        const emailSubject = subject;
        let encodedSubject = emailSubject.replace(/\s/g, "%20");

        const emailBody = body;
        let encodedBody = emailBody.replace(/\s/g, "%20");
        encodedBody = encodedBody.replace(/['&']/g, "&amp");
        
        window.location = `mailto:brandongrando@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    }


    return (
        <div className="w-[95%] bg-white py-20 rounded-xl shadow-lg mx-auto mb-40">

            <h1 className="text-center font-bold text-2xl">Let's chat!</h1>

           
            <form onSubmit={handleContactSubmit}>

                <div className="flex flex-col my-5 ">
                    <label className="text-center text-lg font-bold mt-5 mb-2" for="subject">Subject</label>
                    <input className="mx-auto w-[95%] max-w-[800px] border border-gray-500 rounded-md text-center" type='text' id='subject' name="subject" value={subject} onChange={e => setSubject(e.target.value)}/>
                </div>

                <div className="flex flex-col my-5">
                    <label className="text-center text-lg font-bold mt-5 mb-2" for='body'>Message</label>
                    <input className="mx-auto w-[95%] max-w-[800px] h-52 border border-gray-500 rounded-md" type='textarea' id='body' name='body' value={body} onChange={e => setBody(e.target.value)}/>
                </div>

                <div className=" mx-auto my-10 flex justify-center items-center text-center bg-blue-600 text-white font-bold rounded-xl shadow w-24 h-10">
                    <input type="submit" />
                </div>    

            </form>
        
        
        </div>
    )
}


export function GoogleContactForm() {
    return (
        <div className="flex justify-center h-[1250px] w-screen">
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfu8INDoiPheV0eLIU1NW7Stm0vn_Txj1230Wm6kCNQapRerA/viewform?embedded=true" 
            width='100%' frameBorder="0" marginHeight="0" marginWidth="0">
                Loading…
        </iframe>
        </div>
    )
}

// width="640" height="650" frameborder="0" marginheight="0" marginwidth="0"