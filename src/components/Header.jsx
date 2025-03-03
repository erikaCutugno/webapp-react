import Heading from "./ui/Heading";
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-800 text-rose-800 p-4 m-4 rounded-2xl shadow-xl flex justify-between items-center sticky top-4">
      <Link to="/">
        <Heading level={1}>Movies 138</Heading>
      </Link>
      <NavLink to="/movies/admin" className="hover:text-rose-700">
        <Heading level={4}>Admin</Heading>
      </NavLink>
    </header>
  );
}
