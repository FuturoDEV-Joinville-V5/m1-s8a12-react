import BookCard from "../molecules/BookCard";
import styles from "./BookGrid.module.css";

export default function BookGrid({ books = [] }) {
  return (
    <div className={styles.BookGridContainer}>
      {books.map((b) => (
        <BookCard
          key={b.id}
          name={b.name}
          price={b.price}
          rating={b.rating}
          categories={b.categories}
        />
      ))}
    </div>
  );
}
