import { useState } from "react";
import ProductPageTemplate from "../components/templates/ProductPageTemplate";

const produtosExemplo = [
  {
    id: 1,
    name: "Alecrim",
    rating: 4,
  },
  {
    id: 2,
    name: "Oregano",
    rating: 5,
  },
  {
    id: 3,
    name: "Salsinha",
    rating: 2,
  },
  {
    id: 4,
    name: "Cebolinha",
    rating: 2,
  },
];

export default function ProductPage() {
  return (
    <ProductPageTemplate products={produtosExemplo} footerText="Promoção" />
  );
}
