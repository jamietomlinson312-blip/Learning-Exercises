export const DeleteButton = ({ id, deleteJob }) => {
  return (
    <>
      <button onClick={() => deleteJob({ id })} poin>
        <i
          className="fa-solid fa-trash"
          style={{ color: "rgb(50, 50, 50)", cursor: "pointer" }}
        ></i>
      </button>
    </>
  );
};
