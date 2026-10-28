import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";
import "./App.css";

function App() {
  const apiKey = "df5bbc0391d815289e50df5c168e3255"; // my API key for TMDB
  const [movies, setMovies] = useState([
    // setting the initial movie array
    {
      id: "",
      title: "",
      releaseDate: "",
      rating: "",
      imagesrc: null,
      dateTemporal: "",
    },
  ]);
  const [pop, setPop] = useState(7); // state variables for popularity button, sorting, and keywords to fetch different lists from the API
  const [keyword, setKeyword] = useState("top_rated");
  const [sortBy, setSortBy] = useState("Rating - Ascending");
  const [page, setPage] = useState(1);
  const [titleSearch, setTitle] = useState("");
  let pageParam = `&page=${page}`;
  let titleParam = `&query=${titleSearch}`;
  console.log(titleSearch, titleParam);

  const fetchMovies = async () => {
    // function for fetching API data

    let fetchURL;
    if (titleSearch === "") {
      console.log("if");
      // building the URL using the selected parameters and personal API key}
      fetchURL =
        "https://api.themoviedb.org/3/movie/" +
        keyword +
        "?api_key=" +
        apiKey +
        pageParam;
    } else
      fetchURL =
        "https://api.themoviedb.org/3/search/movie?api_key=" +
        apiKey +
        titleParam;
    console.log(fetchURL, titleParam);

    try {
      const result = await fetch(fetchURL);
      if (!result.ok) {
        throw new Error(`Response Status: ${result.status}`); // checking API promise result and returning error if .ok is false
      }
      const data = await result.json(); // convert to JSON data type
      console.log("data-results", data["results"]);
      setMovies(
        data["results"].map((movie) => ({
          // Map through the API results and build an array of values to be used for rendering
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          rating: movie.vote_average,
          imagesrc: "http://image.tmdb.org/t/p/w500" + movie.poster_path,
          dateTemporal: Temporal.PlainDate.from(movie.release_date),
        })),
      );
      if (sortBy === "Rating - Descending") {
        setMovies(
          resultsArray.sort(function (a, b) {
            return b.rating - a.rating;
          }),
        );
      } else if (sortBy === "Rating - Ascending") {
        setMovies(
          resultsArray.sort(function (a, b) {
            return a.rating - b.rating;
          }),
        );
      } else if (sortBy === "Release Date - Old to New") {
        setMovies(
          resultsArray.sort(function (a, b) {
            return Temporal.PlainDate.compare(a.dateTemporal, b.dateTemporal); // comparing dates using the temporal date objects - returns -1, 0 or +1 which is used in .sort
          }),
        );
      } else {
        setMovies(
          resultsArray.sort(function (a, b) {
            return Temporal.PlainDate.compare(b.dateTemporal, a.dateTemporal);
          }),
        );
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`); // error handling - logging to console
    }

    // Conditional statements to sort resultsArray by rating or release date, and calling setMovies to update state
  };

  useEffect(() => {
    // call fetchMovies whenever keyword or sortBy changes
    fetchMovies();
  }, [keyword, titleSearch, page, sortBy]);

  return (
    <>
      <div className="font-montserrat">
        <Header />
        <div className="z-1 p-5 mt-20 flex max-w-1/3  gap-4 items-baseline">
          <SearchBar search={setTitle} />
        </div>
        <MainContent
          content={movies}
          pop={setPop}
          keyword={setKeyword}
          status={keyword}
          sortBy={setSortBy}
          sort={sortBy}
          page={setPage}
          currentPage={page}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
