import ServiceCard from "./ServiceCard";

import styles from "./ServiceGrid.module.css";

const SERVICES = [
  "Elétrica",
  "Escapamento",
  "Lavagem",
  "Óleo",
  "Pneus",
  "Suspesão",
];

function ServiceCardGrid({ workshops = [], onServiceClick = () => {} }) {
  return (
    <ul className={styles.ServiceGrid}>
      {SERVICES.map((s) => (
        <ServiceCard
          key={s}
          label={s}
          workshops={workshops.filter((w) => w.services.includes(s))}
          onClick={onServiceClick}
        />
      ))}
    </ul>
  );
}

export default ServiceCardGrid;
