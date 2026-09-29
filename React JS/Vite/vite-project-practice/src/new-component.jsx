import { useState } from "react";

export function AdvancedJobCounter() {

    let [currentJobs, setJob] = useState(0);
    let [currentStatus, setStatus] = useState("No jobs available")

    const incrementJobs = () => {
        setJob(currentJobs => currentJobs + 1);
        setStatus("Jobs available");
    }
    const decrementJobs = () => {
        setJob((currentJobs) => {
            if (currentJobs > 0){
                return currentJobs -1;
            } else return 0;
        });
        setStatus(() => {
            if ((currentJobs -1) > 0){
                return "Jobs available"
            } else return "No jobs available"
        })
    }
    const resetJobs = () => {
        setJob(0);
        setStatus("No jobs available");
    }
    return (
        <>
        <div className = "flex flex-col gap-15 items-center mx-auto max-w-8/20"> 
            <h1 className="mt-10 text-2xl font-bold">Current Jobs: {currentJobs}</h1>
            <div className="flex gap-5 justify-center items-center">
                <button onClick={() => {
                    incrementJobs()
                    }} 
                    className="bg-slate-200 py-1 px-2 rounded-md ">Add Job</button>

                <button onClick={() => {
                    decrementJobs()
                    }}  className="bg-slate-200 py-1 px-2 rounded-md ">Remove Job</button>

                <button onClick={() => {
                    resetJobs()
                    }}  className="bg-slate-200 py-1 px-2 rounded-md ">Reset Job Counter</button>
            </div>
            <p>{currentStatus}</p>
           
        </div>

        <div className="mt-15 p-10 shadow-md rounded-md flex flex-col max-w-8/10 mx-auto ">
             <p className="font-bold text-xl">Learning Outcomes:</p>
            <ul className="mt-10 list-disc flex flex-col items-start">
                <li>Using the useState hook to manage state in a functional component.</li>
                <li>Updating state based on user interactions.</li>
                <li>Conditional rendering based on state values.</li>
                <li>Handling multiple state variables in a single component.</li>
            </ul>
        </div>
        
        </>
    )
}

export function SomeText() {
    return (<>
    <p className="mt-20 text-3xl font-extrabold">Practicing core React concepts using the Vite framework</p></>) 
}
