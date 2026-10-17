export const PageSelect = ({ page, currentPage }) => {
  const pageNums = [1, 2, 3, 4, 5];
  const clickHandler = (e) => {
    const pageVal = e.target.innerHTML;
    page(parseInt(pageVal));
  };
  return (
    <>
      {pageNums.map((num) => (
        <p
          key={num}
          onClick={clickHandler}
          className={
            num === currentPage
              ? "font-bold underline underline-offset-2 cursor-pointer"
              : "cursor-pointer"
          }
        >
          {num}
        </p>
      ))}
    </>
  );
};
