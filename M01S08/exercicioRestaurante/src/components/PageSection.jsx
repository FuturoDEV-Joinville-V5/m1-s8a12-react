import "./PageSection.css";

function PageSection({ id, title, children }) {
  return (
    <section className="PageSection">
      <div>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default PageSection;
