import { MovieCard } from "./MovieCard";
import { PageSelect } from "./PageSelect";

export const MainContent = ({
  content,
  pop,
  keyword,
  status,
  sort,
  sortBy,
  page,
  currentPage,
}) => {
  const changeHandler = (e) => {
    // event handler for 'sort by' dropdown, calls sortBy to update state
    sortBy(e.target.value);
  };

  return (
    <>
      <header className="z-1 p-5 flex justify-between items-baseline">
        <div className="flex gap-4">
          <h3
            className={
              // conditional rendering for selected button
              status === "now_playing"
                ? "cursor-pointer text-sm bg-slate-300 px-2 py-1 rounded-md border"
                : "cursor-pointer text-sm px-2 py-1"
            }
            onClick={() => keyword("now_playing")} // click handler - sets keyword state depending on which button selected
          >
            Now Playing
          </h3>
          <h3
            className={
              status === "top_rated"
                ? "cursor-pointer text-sm bg-slate-300 px-2 py-1 rounded-md border"
                : "cursor-pointer text-sm px-2 py-1"
            }
            onClick={() => keyword("top_rated")}
          >
            Top Rated
          </h3>
          <h3 className="text-sm px-2 py-1 rounded-md  ">
            Filter by Popularity
          </h3>

          <ul className=" flex items-center gap-3 font-semibold text-sm  ">
            <li className="cursor-pointer" onClick={() => pop(8)}>
              8+
            </li>
            <li className="cursor-pointer" onClick={() => pop(7)}>
              7+
            </li>
            <li className="cursor-pointer" onClick={() => pop(6)}>
              6+
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <PageSelect page={page} currentPage={currentPage} />
          <label htmlFor="sortBy" className="font-semibold">
            Sort By
          </label>
          <select // sort by dropdown
            value={sort}
            onChange={changeHandler}
            id="sortBy"
            className="p-2 border-b border-slate-200"
          >
            <option>Rating - Ascending</option>
            <option>Rating - Descending</option>
            <option>Release Date - Old to New</option>
            <option>Release Date - New to Old</option>
          </select>
        </div>
      </header>

      <main
        id="main_content"
        className="z-1 mb-10 mx-auto p-5 grid grid-cols-5 gap-5"
      >
        {content.map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.imagesrc}
            title={movie.title}
            releaseDate={movie.releaseDate}
            rating={movie.rating}
          />
        ))}
      </main>
      <nav className="flex gap-2 max-w-1/8 mx-auto mb-10 items-center justify-around text-sm font-light cursor-pointer">
        <PageSelect page={page} currentPage={currentPage} />
      </nav>
    </>
  );
};
