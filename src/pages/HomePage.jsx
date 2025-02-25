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
      <h1 className="px-8 py-4">Home</h1>
      <ul className="px-8 list-disc">
        {movies.map((movie) => (
          <li key={movie.id}> {movie.title}</li>
        ))}
      </ul>
    </>
  );
}
