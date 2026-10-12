import { useState } from "react";

export function AdvancedJobCounter() {
  let [currentJobs, setJob] = useState(0);
  let [currentStatus, setStatus] = useState("No jobs available");

  const incrementJobs = () => {
    setJob((currentJobs) => currentJobs + 1);
    setStatus("Jobs available");
  };
  const decrementJobs = () => {
    setJob((currentJobs) => {
      if (currentJobs > 0) {
        return currentJobs - 1;
      } else return 0;
    });
    setStatus(() => {
      if (currentJobs - 1 > 0) {
        return "Jobs available";
      } else return "No jobs available";
    });
  };
  const resetJobs = () => {
    setJob(0);
    setStatus("No jobs available");
  };
  return (
    <>
      <div className="flex flex-col gap-15 items-center mx-auto max-w-8/20">
        <h1 className="mt-10 text-2xl font-bold">
          Current Jobs: {currentJobs}
        </h1>
        <div className="flex gap-5 justify-center items-center">
          <button
            onClick={() => {
              incrementJobs();
            }}
            className="bg-slate-200 py-1 px-2 rounded-md "
          >
            Add Job
          </button>

          <button
            onClick={() => {
              decrementJobs();
            }}
            className="bg-slate-200 py-1 px-2 rounded-md "
          >
            Remove Job
          </button>

          <button
            onClick={() => {
              resetJobs();
            }}
            className="bg-slate-200 py-1 px-2 rounded-md "
          >
            Reset Job Counter
          </button>
        </div>
        <p>{currentStatus}</p>
      </div>

      <div className="mt-15 mb-20 p-10 shadow-md rounded-md flex flex-col max-w-8/10 mx-auto ">
        <p className="font-bold text-xl">Learning Outcomes:</p>
        <ul className="mt-10 list-disc flex flex-col items-start">
          <li>
            Using the useState hook to manage state in a functional component.
          </li>
          <li>Updating state based on user interactions.</li>
          <li>Conditional rendering based on state values.</li>
          <li>Handling multiple state variables in a single component.</li>
        </ul>
      </div>
    </>
  );
}

export function SomeText() {
  return (
    <div className="mt-20">
      <p className="mt-20 text-3xl font-extrabold">
        Practicing core React concepts using the Vite framework
      </p>
    </div>
  );
}

export function DynamicForm() {
  const handleChange = (event) => {
    // function to capture data from input field and update State
    setInput(event.target.value);
    setCount(event.target.value.length);
  };
  const clearForm = () => {
    // Clearing input field (set to empty string and 0 characters)
    setInput("");
    setCount(0);
  };
  const addToArray = () => {
    // update itemList array with value from the input field
    setList([...itemList, document.querySelector("#input").value]);
  };
  // State variables

  let [inputVal, setInput] = useState("");
  let [count, setCount] = useState(0);
  let [itemList, setList] = useState([]);

  return (
    <>
      <div className="flex flex-col gap-5 items-start justify-center mx-auto">
        <h1 className="underline text-2xl font-bold">Dynamic Form</h1>
        <input
          id="input"
          type="text"
          onChange={handleChange}
          value={inputVal}
          placeholder="Type something..."
        ></input>{" "}
        {/* Input field */}
        <div className="mb-5 flex flex-col gap-5 items-start">
          <h1 className="text-xl font-bold">Text Display:</h1>
          <div className="flex gap-5 ">
            <p className="shadow-md">{inputVal}</p>{" "}
            {/* Render current input field */}
            <button
              onClick={addToArray}
              className="text-xs bg-slate-200 py-1 px-2 rounded-md "
            >
              Submit To List
            </button>{" "}
            {/* Calls addToArray */}
          </div>
          <p>
            Current array:{" "}
            {itemList.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </p>{" "}
          {/* Maps through itemList array and renders as list elements */}
          <h1 className="text-xl font-bold">Character Count:</h1>
          <p className="font-bold">{count}</p>
          <button
            onClick={clearForm}
            className="text-sm bg-slate-200 py-1 px-2 rounded-md "
          >
            Clear Field
          </button>{" "}
          {/* calls clearForm to reset fields */}
        </div>
        <div className="mb-20  p-10 shadow-md rounded-md flex flex-col">
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
  );
}

export function BotListManager() {
  const [bots, setBots] = useState([
    {
      id: 1,
      name: "Email Extractor",
      status: "Running",
      task: "Extracting emails",
    },
    {
      id: 2,
      name: "Notification Sender",
      status: "Completed",
      task: "Sending notifications",
    },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" },
  ]);

  const triggerJob = (id) => {
    setBots(
      bots.map((bot) => {
        if (bot.id === id) {
          bot.status = "Running"; // reassigning "status" property
          return bot;
        } else return bot; // if id doesn't match, returns the unmodified bot object
      }),
    );
  };

  function handleDelete(id) {
    setBots(bots.filter((bot) => id !== bot.id)); // filter out bot objects based on id
  }

  const [newBot, setNewBot] = useState({
    // initialise blank bot object
    id: "",
    name: "",
    status: "",
    task: "",
  });

  const addBot = () => {
    if (
      newBot.id.trim() !== "" && // conditional logic to make sure all fields are filled
      newBot.name !== "" &&
      newBot.status !== "" &&
      newBot.task !== ""
    ) {
      setBots([...bots, newBot]);
      setNewBot({ id: "", name: "", status: "", task: "" }); // inputs captured by onChange event attached to the input forms
    }
  };

  const editBot = (id) => {
    setBots(
      bots.map((bot) => {
        if (bot.id === id) {
          bot.name = prompt("Enter new Name").trim(); // if ID matches, prompts users for new values and reassigns bot properties
          bot.status = prompt("Enter new Status").trim();
          bot.task = prompt("Enter new Task").trim();
          console.log(bot.name, bot.status, bot.task);
        }
        return bot;
      }),
    );
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-start justify-center mx-auto">
        <h1 className="underline text-2xl font-bold">Bot List Manager</h1>
        <ul className="list-disc flex flex-col gap-5 items-start">
          {bots.map((bot) => (
            <li
              className={
                bot.status === "Running" ? "text-green-700" : "text-red-700" // conditional rendering - green for running, red for stopped
              }
              key={bot.id}
            >
              <span style={{ fontWeight: "700" }}>ID:</span>
              {bot.id}
              {"      "}
              <span style={{ fontWeight: "700" }}>Name:</span>
              {bot.name} <span style={{ fontWeight: "700" }}>Status:</span>
              {bot.status}
              {"      "}
              <span style={{ fontWeight: "700" }}>Task:</span>
              {bot.task}
              {"      "}
              <div className="mt-4 flex justify-start gap-2">
                <button
                  style={{ color: "black" }}
                  onClick={() => triggerJob(bot.id)}
                  className="ml-10 text-xs bg-slate-200 py-1 px-2 rounded-md"
                >
                  Trigger Job
                </button>
                <button
                  style={{ color: "black" }}
                  onClick={() => handleDelete(bot.id)}
                  className="ml-10 text-xs bg-slate-200 py-1 px-2 rounded-md"
                >
                  Delete Job
                </button>
                <button
                  style={{ color: "black" }}
                  onClick={() => editBot(bot.id)}
                  className="ml-10 text-xs bg-slate-200 py-1 px-2 rounded-md"
                >
                  Edit Job
                </button>
              </div>
            </li>
          ))}
        </ul>

        <form className="w-9/10 flex flex-col gap-4 justify-around items-start">
          <input
            id="ID"
            type="text"
            required
            value={newBot.id}
            className="border-1 p-1 shadow-md"
            placeholder="Enter ID"
            onChange={(e) => setNewBot({ ...newBot, id: e.target.value })}
          ></input>
          <input
            id="name"
            type="text"
            required
            value={newBot.name}
            className="border-1 p-1 shadow-md"
            placeholder="Enter Name"
            onChange={(e) => setNewBot({ ...newBot, name: e.target.value })}
          ></input>
          <input
            id="status"
            type="text"
            required
            value={newBot.status}
            className="border-1 p-1 shadow-md"
            placeholder="Enter Status"
            onChange={(e) => setNewBot({ ...newBot, status: e.target.value })}
          ></input>
          <input
            id="task"
            type="text"
            required
            value={newBot.task}
            className="border-1 p-1 shadow-md"
            placeholder="Enter Task"
            onChange={(e) => setNewBot({ ...newBot, task: e.target.value })}
          ></input>
          <button
            className="ml-10 text-xs bg-slate-200 py-1 px-2 rounded-md"
            onClick={addBot}
          >
            Add New Bot
          </button>
        </form>

        <div className="mb-20 p-10 shadow-md rounded-md flex flex-col">
          <p className="font-bold text-xl">Learning Outcomes:</p>
          <ul className="mt-10 list-disc flex flex-col items-start">
            <li>
              Using useState with more complex data structures (arrays of
              objects)
            </li>
            <li>
              Mapping and filtering over arrays to render dynamic content.
            </li>
            <li>
              Handling forms, events and updating state based on user
              interactions.
            </li>
            <li>Conditional rendering and styling.</li>
            <li>Working with lists and keys in React</li>
          </ul>
        </div>
      </div>
    </>
  );
}
