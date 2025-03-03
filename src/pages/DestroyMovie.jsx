import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import axios from "../api/axios";
import { useState, useEffect } from "react";

export default function DestroyMovie() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };
  useEffect(fetchMovies, []);
  return (
    <>
      <Container>
        <div className="bg-slate-800 text-white p-4">
          <Heading level={1}>Cancella nuovo film</Heading>
          <table className="table-auto w-full border border-slate-600 mt-4">
            <thead>
              <tr className="bg-slate-700 text-left">
                <th className="border border-slate-600 p-2">Titolo</th>
                <th className="border border-slate-600 p-2">Regista</th>
                <th className="border border-slate-600 p-2">Genere</th>
                <th className="border border-slate-600 p-2">-</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <td className="border border-slate-600 p-2">{movie.title}</td>
                  <td className="border border-slate-600 p-2">
                    {movie.director}
                  </td>
                  <td className="border border-slate-600 p-2">{movie.genre}</td>
                  <td className="border border-slate-600 p-2 text-center">
                    <Button size="sm">
                      <i className="fa-solid fa-xmark text-lg"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
