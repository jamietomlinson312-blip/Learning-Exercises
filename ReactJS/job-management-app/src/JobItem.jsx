import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
const time = Temporal.Now.zonedDateTimeISO();

export const JobItem = ({ jobs, id, title, category, deleteJob, setJob }) => {
  return (
    <div className="mt-3 p-5 flex flex-col gap-6 justify-between items-start border rounded-sm shadow-sm">
      <div className="w-full flex flex-col gap-3">
        <p className="italic">{time.toLocaleString()}</p>
        <p>{title}</p>
        <div className="w-full flex justify-between">
          <EditButton jobs={jobs} setJob={setJob} id={id} />
          <DeleteButton deleteJob={deleteJob} id={id} />
        </div>
      </div>

      <div className="flex gap-6 justify-center">
        <p className="font-bold">Categories:</p>
        {category.map((i, index) => (
          <p
            key={index}
            className="bg-neutral-200 rounded-sm px-2 py-1 text-xs font-light"
          >
            {" "}
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};
