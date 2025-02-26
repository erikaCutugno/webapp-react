import Heading from "./Heading";
import Stars from "./Stars";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Card({ title, genre, director, content, link, vote }) {
  return (
    <div className="bg-slate-800 text-white rounded-xl  shadow p-4">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-3 ">
        <Heading level={2}>{title}</Heading>
        <Stars vote={vote} />
      </div>
      <Heading level={6}>{director}</Heading>
      <p className="text-sm">Genere: {genre}</p>
      <p className="text-sm">{content}</p>
      <div className="mt-auto text-center pt-4">
        <Link to={link}>
          <Button>Leggi di più</Button>
        </Link>
      </div>
    </div>
  );
}
