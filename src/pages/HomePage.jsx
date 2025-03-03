import axios from "../api/axios";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import { useLoaderContext } from "../../context/LoaderContext";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useLoaderContext();

  const fetchMovies = () => {
    setIsLoading(true);
    axios
      .get("/movies/")
      .then((res) => {
        setMovies(res.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <Container>
        <div className="text-rose-800 p-4">
          <Heading level={1}>Lista film</Heading>
        </div>

        <Container size="sm">
          <div className="grid grid-cols-12 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
              >
                <Card
                  image={movie.image}
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
      </Container>
    </>
  );
}
