import styles from "./Rating.module.css";

const MAX_STARS = 5;

const renderStars = (rating) => {
  let stars = [];
  for (let i = 0; i < rating && i < MAX_STARS; i += 1) {
    stars.push(<li key={i}>⭐</li>);
  }
  return stars;
};

export default function Rating({ value = 0 }) {
  return <ul className={styles.RatingContainer}>{renderStars(value)}</ul>;
}
