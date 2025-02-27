import axios from "../api/axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "./ui/Heading";
import Button from "./ui/Button";

const initialData = {
  name: "",
  text: "",
  vote: 0,
};

export default function FormAddReview({ fetchMovies }) {
  const [formData, setFormData] = useState(initialData);
  const { id } = useParams();

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

    axios.post(`/movies/${id}/reviews`, formData).then(() => {
      setFormData(initialData);
      fetchMovies();
    });
  };

  return (
    <>
      <Heading level={2}>Aggiungi una recensione</Heading>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="my-2 inline-block">
            Nome
          </label>
          <input
            className="w-full border border-slate-700 p-2 rounded-sm"
            id="name"
            name="name"
            type="text"
            placeholder="Inserisci il tuo nome"
            value={formData.name}
            onChange={(e) => handleField("name", e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="vote" className="my-2 inline-block">
            Vote
          </label>
          <input
            className="w-full border border-slate-700 p-2 rounded-sm"
            id="vote"
            name="vote"
            type="number"
            placeholder="Inserisci il voto"
            min={0}
            max={5}
            value={formData.vote}
            onChange={(e) => handleField("vote", e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="text" className="my-2 inline-block">
            Recensione
          </label>
          <textarea
            className="w-full border border-slate-700 p-2 rounded-sm"
            id="text"
            type="text"
            name="text"
            placeholder="Inserisci il testo della recensione"
            rows={5}
            value={formData.text}
            onChange={(e) => handleField("text", e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <Button type="submit">Invia</Button>
        </div>
      </form>
    </>
  );
}
