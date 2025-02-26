import Stars from "./Stars";

export default function Review({ name, text, vote }) {
  return (
    <div>
      <div>Scritto da: {name}</div>
      <Stars vote={vote} />
      <div>{text}</div>
    </div>
  );
}
