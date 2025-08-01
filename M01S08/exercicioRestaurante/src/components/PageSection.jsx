function PageSection({ title, children }) {
  return (
    <section className="PageSection">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default PageSection;
