import Heading from "./ui/Heading";

export default function Header() {
  return (
    <header className="bg-slate-800 text-rose-800 p-4 m-4 rounded-2xl shadow-xl text-center sticky top-4">
      <Heading level={1}>Movies 138</Heading>
    </header>
  );
}
