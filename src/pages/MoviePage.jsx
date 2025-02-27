import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Review from "../components/ui/Review";
import FormAddReview from "../components/FormAddReview";

export default function MoviePage() {
  const [movie, setMovie] = useState({ review: [] });
  const { id } = useParams();

  const fetchMovie = () => {
    axios.get(`/movies/${id}`).then((res) => {
      setMovie(res.data);
    });
  };

  useEffect(fetchMovie, [id]);
  return (
    <div className="p-6">
      <Container size="sm">
        <Link to="/">
          <i className="fa-solid fa-house my-6 text-rose-800"></i>
          <span className="px-3 text-rose-800 text-lg font-medium">Home</span>
        </Link>
        <div className="flex flex-wrap bg-slate-800 rounded-xl shadow ">
          <div className=" w-full sm:w-1/3">
            <img src={movie.image} alt={movie.title} className="w-full" />
          </div>
          <div className="text-white p-4 space-y-6 sm:w-2/3">
            <Heading level={2}>{movie.title}</Heading>
            <Heading level={6}>{movie.director}</Heading>
            <p className="text-sm">Genere: {movie.genre}</p>
            <p className="text-sm">{movie.abstract}</p>
          </div>
        </div>
        <div className="bg-slate-800 text-white rounded-xl mt-6 shadow p-4 ">
          <Heading level={2}>Recensioni</Heading>
          <ul className="p-6">
            {movie.review.map((elm) => (
              <li className="p-2" key={elm.id}>
                <Review name={elm.name} vote={elm.vote} text={elm.text} />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-800 text-white rounded-xl mt-6 shadow p-4 ">
          <FormAddReview fetchMovies={fetchMovie}></FormAddReview>
        </div>
      </Container>
    </div>
  );
}
