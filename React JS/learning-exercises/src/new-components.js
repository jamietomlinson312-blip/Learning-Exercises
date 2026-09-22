export function Header() {
    return (
        <div className="header">
            <h1>A space for practicing React concepts</h1>
        </div>
    )
}

export function JobBoard() {
    const companyName = "Facebook";
    const jobCount = 10;
    const jobMessage = () => {

        if (jobCount === 0){ // Conditional statements to render a different output depending on
            return "No Jobs"
        } else if (jobCount < 5){
            return `There are ${jobCount} jobs available`
        } else {
            return `There are ${jobCount} jobs available, do not open more roles`
        }
    }
    return (
        <div className="job-board">
            <h2>JSX expressions - learning outcomes</h2>
            <ul>
                <li>Using JSX expressions to display variable content</li>
                <li>Implementing conditional logic within a function</li>
                <li>Using template literals for dynamic string creation</li>
                <li>Calling functions within JSX</li>
            </ul>
            <h3>{companyName}</h3>
            <p>{jobMessage()}</p>
        </div>
    )
}