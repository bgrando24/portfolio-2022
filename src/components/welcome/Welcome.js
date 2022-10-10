// Displays the welcome message when user first lands on page

import './Welcome.css';

export function Welcome() {
    return (
        <div className="flex items-center justify-center bg-black h-screen w-screen opacity-90">
            <p className="text-center text-white" id="welcome-text">test</p>
        </div>
    )
}
