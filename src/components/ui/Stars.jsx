export default function Stars({ vote }) {
  let star = [];
  for (let i = 1; i <= 5; i++) {
    if (vote >= i) {
      star.push(<i key={i} className="fa-solid fa-star"></i>);
    } else {
      star.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }
  return (
    <>
      <div className="text-amber-300">{star}</div>
    </>
  );
}
