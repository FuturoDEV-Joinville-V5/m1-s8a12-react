import { useEffect, useState } from "react";
import BookGrid from "../organisms/BookGrid";
import FilterPanel from "../molecules/FilterPanel";
import styles from "./BookSearch.module.css";

function BookSearch({ books = [], categories = [] }) {
  const [filterCategory, setFilterCategory] = useState();

  const filteredBooks = books.filter(
    (b) => filterCategory === "Todos" || b.categories.includes(filterCategory)
  );

  useEffect(() => {
    if (categories.length) {
      setFilterCategory(categories[0]);
    }
  }, [categories]);

  const atualizaFiltro = (novaCategora) => {
    setFilterCategory(novaCategora);
  };

  return (
    <div className={styles.BookSearchContainer}>
      <header>
        <h1>ebooks</h1>
      </header>
      <FilterPanel categories={categories} onChange={atualizaFiltro} />
      <BookGrid books={filteredBooks} />
      <footer>2025</footer>
    </div>
  );
}

export default BookSearch;
