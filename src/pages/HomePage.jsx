import axios from "../api/axios";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";

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
      <div className="text-rose-800  p-8">
        <Heading level={1}>Lista film</Heading>
      </div>

      <Container>
        <div className="grid grid-cols-12 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Card
                title={movie.title}
                content={movie.abstract}
                director={movie.director}
                genre={movie.genre}
                vote={movie.media_vote}
                link={`/movies/${movie.id}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
