import Price from "../atoms/Price";
import Rating from "../atoms/Rating";
import Tags from "../atoms/Tags";
import styles from "./BookCard.module.css";

export default function BookCard({
  name = "",
  price = 0,
  rating = 0,
  categories = [],
}) {
  return (
    <div className={styles.BookCardContainer}>
      <p>{name}</p>
      <div className={styles.midSection}>
        <Price value={price} />
        <Rating value={rating} />
      </div>
      <Tags categories={categories} />
    </div>
  );
}
