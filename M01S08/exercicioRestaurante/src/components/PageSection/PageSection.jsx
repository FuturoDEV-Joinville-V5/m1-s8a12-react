import "./PageSection.css";

function PageSection({ id, title, className, hideTitle, children }) {
  return (
    <section className={`PageSection ${className}`}>
      <div className="container">
        <h2 id={id} className={hideTitle ? "hidden" : ""}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default PageSection;
