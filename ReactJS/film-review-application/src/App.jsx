import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
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

  const fetchMovies = async () => {
    // function for fetching API data
    const fetchURL =
      "https://api.themoviedb.org/3/movie/" + keyword + "?api_key=" + apiKey; // building the URL using the selected tab (keyword) and personal API key
    try {
      const result = await fetch(fetchURL);
      if (!result.ok) {
        throw new Error(`Response Status: ${result.status}`); // checking API promise result and returning error if .ok is false
      }
      const data = await result.json(); // convert to array
      const resultsArray = data["results"].map((movie) => ({
        // Map through the API results and build an array of values to be used for rendering
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        rating: movie.vote_average,
        imagesrc: "http://image.tmdb.org/t/p/w500" + movie.poster_path,
        dateTemporal: Temporal.PlainDate.from(movie.release_date),
      }));

      // Conditional statements to sort resultsArray by rating or release date, and calling setMovies to update state

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
  };

  useEffect(() => {
    // call fetchMovies whenever keyword or sortBy changes
    fetchMovies();
  }, [keyword, sortBy]);

  return (
    <>
      <div className="font-montserrat">
        <Header />
        <MainContent
          content={movies}
          pop={setPop}
          keyword={setKeyword}
          status={keyword}
          sortBy={setSortBy}
          sort={sortBy}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
