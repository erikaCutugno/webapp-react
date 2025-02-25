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
    <>
      <h1>Lista film: {movie.title}</h1>
      <div>Diretto da: {movie.director}</div>
      <div>Genere: {movie.genre}</div>
      <div>
        Recensioni:
        <ul>
          {movie.review.map((elm) => (
            <li key={elm.id}>
              <div>{elm.text}</div>
              <div>{elm.vote}</div>
              <div>Scritto da:{elm.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
