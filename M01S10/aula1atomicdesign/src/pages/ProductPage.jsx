import { useEffect, useState } from "react";
import ProductPageTemplate from "../components/templates/ProductPageTemplate";

const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
          rating: 3,
        },
        {
          id: 5,
          name: "Tomilho",
          rating: 2,
        },
      ]);
    }, 500);
  });
};

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        setError("Falha ao carregar produtos: " + e);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <div>Carregando...</div>;

  if (error) return <div>{error}</div>;

  return <ProductPageTemplate products={products} footerText="Promoção" />;
}
