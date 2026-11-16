export default function Card({ icon, title, children }) {
  return (
    <article className="card">
      <div className="card__icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}