import "./PageSection.css";

function PageSection({ id, title, children }) {
  return (
    <section className="PageSection">
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  );
}

export default PageSection;
