import movie1 from "../assets/images/visionquest.jpg";
import movie2 from "../assets/images/loveofyourlife.jpg";
import movie3 from "../assets/images/hope.jpg";
import movie4 from "../assets/images/streetfighter.jpg";
export const MainContent = () => {
  return (
    <>
      <header className="mt-20 p-5 flex justify-between items-baseline">
        <div className="flex gap-4">
          <h3>Popularity</h3>

          <ul className="flex items-center gap-3 font-semibold text-sm">
            <li>8+</li>
            <li>7+</li>
            <li>6+</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="font-semibold">
            Sort By
          </label>
          <select id="sortBy" className="p-2 border-b border-slate-200">
            <option>Release Date</option>
            <option>Rating</option>
          </select>
        </div>
      </header>
      <main className="mb-100 mx-auto p-5 grid grid-cols-4">
        <a
          className="w-full p-5 flex flex-col gap-4 items-center text-sm"
          href=""
        >
          <img src={movie1} alt="visionquest" className="rounded-md" />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Movie Title</h2>
            <div>
              <p>Release Date:</p>
              <p>Rating:</p>
            </div>
          </div>
        </a>
        <a
          className="w-full p-5 flex flex-col gap-4 items-center text-sm"
          href=""
        >
          <img src={movie2} alt="love of your life" className="rounded-md" />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Movie Title</h2>
            <div>
              <p>Release Date</p>
              <p>Rating</p>
            </div>
          </div>
        </a>
        <a
          className="w-full p-5 flex flex-col gap-4 items-center text-sm"
          href=""
        >
          <img src={movie3} alt="hope" className="rounded-md" />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Movie Title</h2>
            <div>
              <p>Release Date</p>
              <p>Rating</p>
            </div>
          </div>
        </a>
        <a
          className="w-full p-5 flex flex-col gap-4 items-center text-sm"
          href=""
        >
          <img src={movie4} alt="street fighter" className="rounded-md" />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Movie Title</h2>
            <div>
              <p>Release Date</p>
              <p>Rating</p>
            </div>
          </div>
        </a>
      </main>
    </>
  );
};
