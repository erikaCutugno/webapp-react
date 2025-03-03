import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const initialFormData = {
  title: "",
  director: "",
  abstract: "",
  genre: "",
  release_year: "",
  image: undefined,
};

export default function Admin() {
  //lista film
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };
  //delete film
  const movieDelete = (movieId) => {
    axios.delete(`/movies/${movieId}`).then(() => {
      setMovies((current) => current.filter((movie) => movie.id !== movieId));
    });
  };
  useEffect(fetchMovies, []);

  //form per creare un nuovo film

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleField = (fieldName, fieldValue) => {
    setFormData((current) => {
      return {
        ...current,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`/movies`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        navigate("/");
      });
  };
  return (
    <>
      <Container className="my-8">
        <div className="bg-slate-800 text-white p-4 mb-4">
          <Heading level={1}>Lista film</Heading>
          <table className="table-auto w-full border border-slate-600 mt-4">
            <thead>
              <tr className="bg-slate-700 text-left">
                <th className="border border-slate-600 p-2">Titolo</th>
                <th className="border border-slate-600 p-2">Regista</th>
                <th className="border border-slate-600 p-2">Genere</th>
                <th className="border border-slate-600 p-2"></th>
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
                    <Button size="sm" onClick={() => movieDelete(movie.id)}>
                      <i className="fa-solid fa-xmark text-lg"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800 text-white p-4">
          <Heading level={2}>Aggiungi un nuovo film</Heading>
          <form className="space-y-2 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="inline-block mb-1" htmlFor="title">
                Titolo
              </label>
              <input
                className="w-full border border-slate-700 p-2 rounded-sm"
                id="title"
                name="title"
                type="text"
                placeholder="Inserisci il titolo del film"
                value={formData.title}
                onChange={(e) => handleField("title", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="inline-block mb-1" htmlFor="director">
                Direttore
              </label>
              <input
                className="w-full border border-slate-700 p-2 rounded-sm"
                id="director"
                name="director"
                type="text"
                placeholder="Inserisci il nome del regista"
                value={formData.director}
                onChange={(e) => handleField("director", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="inline-block mb-1" htmlFor="genre">
                Genere
              </label>
              <input
                className="w-full border border-slate-700 p-2 rounded-sm"
                id="genre"
                name="genre"
                type="text"
                placeholder="Inserisci il genere del film"
                value={formData.genre}
                onChange={(e) => handleField("genre", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="inline-block mb-1" htmlFor="year">
                Anno
              </label>
              <input
                className="w-full border border-slate-700 p-2 rounded-sm"
                id="year"
                name="year"
                type="number"
                placeholder="Inserisci l'anno di rilascio"
                min={1900}
                max={new Date().getFullYear()}
                value={formData.release_year}
                onChange={(e) => handleField("release_year", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="inline-block mb-1" htmlFor="image">
                Immagine
              </label>
              <input
                className="w-full border border-slate-700 p-2 rounded-sm"
                id="image"
                name="image"
                type="file"
                accept="image/*"
                placeholder="Inserisci l'immagine"
                onChange={(e) => handleField("image", e.target.files[0])}
                required
              />
            </div>
            <div>
              <label className="inline-block mb-1" htmlFor="abstract">
                Riassunto
              </label>
              <textarea
                className="w-full border border-slate-700 p-2 rounded-sm"
                id="abstract"
                name="abstract"
                placeholder="Inserisci il riassunto del film"
                rows={5}
                value={formData.abstract}
                onChange={(e) => handleField("abstract", e.target.value)}
                required
                minLength={5}
              ></textarea>
            </div>
            <Button type="submit">Invia</Button>
          </form>
        </div>
      </Container>
    </>
  );
}
