import { useState } from "react";

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

        if (jobCount === 0){ // Conditional statements to render a different output depending on jobCount number
            return "No Jobs"
        } else if (jobCount < 5){
            return `There are ${jobCount} jobs available` // template literals to render variables dynamically
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

export function StyledButton() { 
    let status = false;

    return (
        <div className = "job-board" style = {{marginTop:"10px"}}> 
            <h2>Practicing using attributes and inline styles in React</h2>
            <button disabled = {status} 
            style = {{margin:"10px", padding:"5px", color:"black", backgroundColor:"red", borderRadius:"5px"}}>Click Me</button>
            <h2>Styling in React - learning outcomes</h2>
            <ul>
                <li>Creating and applying inline styles in React</li>
                <li>Using proper JSX syntax for styling and attributes</li>
                <li>Working with dynamic attributes</li>
                <li>Understanding the differences between traditional CSS and React inline styling</li>
            </ul>
        </div>   
    )
}