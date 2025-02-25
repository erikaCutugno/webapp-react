import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>Titolo film: {movie.title}</h1>
      <div>Diretto da: {movie.director}</div>
      <div>Genere: {movie.genre}</div>
      <div>
        Recensioni:
        <ul className="p-6 list-decimal">
          {movie.review.map((elm) => (
            <li className="p-2" key={elm.id}>
              <div>{elm.text}</div>
              <div>{elm.vote}</div>
              <div>Scritto da:{elm.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
