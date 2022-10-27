import { GoogleContactForm } from "../../home/components/contact/Contact";

export function ContactPage() {
    return (
        <div className="py-20">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">Want to know more?</h1>
                <GoogleContactForm />
            </div>
        </div>
    )
}