import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Review from "../components/ui/Review";

export default function MoviePage() {
  const [movie, setMovie] = useState({ review: [] });
  const { id } = useParams();

  const fetchMovie = () => {
    axios.get(`/movies/${id}`).then((res) => {
      setMovie(res.data);
      console.log(res.data);
    });
  };

  useEffect(fetchMovie, [id]);
  return (
    <div className="p-6">
      <Container>
        <Link to="/">
          <i className="fa-solid fa-house my-6 text-rose-800"></i>
          <span className="px-3 text-rose-800 text-lg font-medium">Home</span>
        </Link>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="bg-slate-800 text-white rounded-xl  shadow p-4">
            <Heading level={2}>{movie.title}</Heading>
            <Heading className="px-6 pt-6 pb-4" level={6}>
              {movie.director}
            </Heading>
            <p className="text-sm px-6 py-4">Genere: {movie.genre}</p>
            <p className="text-sm px-6 py-4">{movie.abstract}</p>
          </div>
          <div className="bg-slate-800 text-white rounded-xl  shadow p-4 ">
            <Heading level={2}>Recensioni</Heading>
            <ul className="p-6">
              {movie.review.map((elm) => (
                <li className="p-2" key={elm.id}>
                  <Review name={elm.name} vote={elm.vote} text={elm.text} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
