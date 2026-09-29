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
    return (<div className="mt-20">
    <p className="mt-20 text-3xl font-extrabold">Practicing core React concepts using the Vite framework</p></div>) 
}

export function DynamicForm() { 
    const handleChange = (event => { // function to capture data from input field and update State
        setInput(event.target.value);
        setCount(event.target.value.length);
    })
    const clearForm = () => { // Clearing input field (set to empty string and 0 characters)
        setInput("");
        setCount(0);
    }
    const addToArray = () => { // update itemList array with value from the input field
        setList([
            ...itemList, document.querySelector("#input").value
        ])
    }
    // State variables

    let [inputVal, setInput] = useState("");
    let [count, setCount] = useState(0);
    let [itemList, setList] = useState([]);

    return (
        <>
            <div className = "flex flex-col gap-5 items-start justify-center mx-auto"> 
                <h1 className=" mt-10 text-2xl font-bold">Dynamic Form</h1>
                <input id="input" type="text" onChange={handleChange} value={inputVal} placeholder="Type something..."></input> {/* Input field */}
                <div className="mb-5 flex flex-col gap-5 items-start">
                    <h1 className="text-xl font-bold">Text Display:</h1>
                    <div className="flex gap-5 ">
                        <p className="shadow-md">{inputVal}</p> {/* Render current input field */}
                        <button onClick={addToArray} className="text-xs bg-slate-200 py-1 px-2 rounded-md ">Submit To List</button> {/* Calls addToArray */}
                    </div>
                    <p>Current array: {itemList.map(e => <li key={e}>{e}</li>)}</p> {/* Maps through itemList array and renders as list elements */}
                    <h1 className="text-xl font-bold">Character Count:</h1>
                    <p className="shadow-md">{count}</p>
                    <button onClick={clearForm} className="text-sm bg-slate-200 py-1 px-2 rounded-md ">Clear Field</button> {/* calls clearForm to reset fields */}
                </div>
                <div className="mt-5 p-10 shadow-md rounded-md flex flex-col">
                    <p className="font-bold text-xl">Learning Outcomes:</p>
                    <ul className="mt-10 list-disc flex flex-col items-start">
                        <li>Using useState for form inputs.</li>
                        <li>Handling onChange events in React.</li>
                        <li>Updating and displaying state in real-time.</li>
                        <li>Understanding component re-rendering in React.</li>
                        <li>Basic form handling and state management.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
