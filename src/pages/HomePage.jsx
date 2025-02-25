import axios from "../api/axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}> {movie.title}</li>
        ))}
      </ul>
    </>
  );
}
