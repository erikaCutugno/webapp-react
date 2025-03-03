import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Review from "../components/ui/Review";
import FormAddReview from "../components/FormAddReview";
import Stars from "../components/ui/Stars";
import { useLoaderContext } from "../../context/LoaderContext";

export default function MoviePage() {
  const { setIsLoading } = useLoaderContext();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ review: [] });
  const { id } = useParams();

  const fetchMovie = () => {
    setIsLoading(true);
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchMovie, [id, navigate, setIsLoading]);
  return (
    <div className="p-6">
      <Container size="sm">
        <Link to="/">
          <i className="fa-solid fa-house my-6 text-rose-800"></i>
          <span className="px-3 text-rose-800 text-lg font-medium">Home</span>
        </Link>
        <section className="flex flex-wrap bg-slate-800 rounded-xl shadow ">
          <div className=" w-full  sm:w-1/3">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full"
            />
          </div>
          <div className="text-white p-4 space-y-4 sm:w-2/3">
            <Heading level={2}>{movie.title}</Heading>
            <Stars vote={movie.media_vote} />
            <Heading level={6}>{movie.director}</Heading>
            <p className="text-sm">Genere: {movie.genre}</p>
            <p className="text-sm">Anno: {movie.release_year}</p>
            <p className="text-sm">{movie.abstract}</p>
          </div>
        </section>
        {movie.review.length > 0 && (
          <section className="bg-slate-800 text-white rounded-xl mt-6 shadow p-4 space-y-4">
            <Heading level={2}>Recensioni</Heading>
            <ul className="space-y-4">
              {movie.review.map((elm) => (
                <li className="border-b border-slate-700 pb-2" key={elm.id}>
                  <Review name={elm.name} vote={elm.vote} text={elm.text} />
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="bg-slate-800 text-white rounded-xl mt-6 shadow p-4 ">
          <FormAddReview fetchMovies={fetchMovie}></FormAddReview>
        </section>
      </Container>
    </div>
  );
}
