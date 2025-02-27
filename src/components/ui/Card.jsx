import Heading from "./Heading";
import Stars from "./Stars";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  genre,
  director,
  content,
  link,
  vote,
}) {
  return (
    <div className="bg-slate-800 text-white rounded-xl shadow group cursor-pointer h-80 sm:h-130">
      <div className="group-hover:hidden h-full w-full">
        <img
          src={image}
          alt={title}
          className="h-full object-contain sm:object-cover w-full bg-slate-900"
        />
      </div>
      <div className="flex flex-col space-y-2 hidden group-hover:flex h-full p-6">
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 ">
          <Heading level={2}>{title}</Heading>
          <Stars vote={vote} />
        </div>
        <Heading level={6}>{director}</Heading>
        <p className="text-sm">Genere: {genre}</p>
        <p className="text-sm">{content}</p>
        <div className="mt-auto text-center">
          <Link to={link}>
            <Button>Leggi di più</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
