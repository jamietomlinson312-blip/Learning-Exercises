// Movie card component, built using data from API results
export const MovieCard = ({ img, title, releaseDate, rating }) => {
  return (
    <>
      <a
        className="w-full mx-auto p-3 flex flex-col gap-2 items-start text-sm rounded-md shadow-sm"
        href=""
      >
        <img src={img} alt={title} className="rounded-md" />
        <div className="">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div>
            <p>Release Date: {releaseDate}</p>
            <p>Rating: {rating}</p>
          </div>
        </div>
      </a>
    </>
  );
};
