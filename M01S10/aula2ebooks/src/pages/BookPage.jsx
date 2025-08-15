import BookSearch from "../components/templates/BookSearch";

const CATEGORIES = ["Todos", "Suspense", "Novela", "Ficção", "Biografia"];

const BOOKS = [
  {
    id: 1,
    name: "Nome Do Livro",
    price: 23.9,
    rating: 4,
    categories: ["Suspense", "Novela"],
  },
  {
    id: 2,
    name: "Segundo Livro",
    price: 22.5,
    rating: 5,
    categories: ["Novela", "Ficção"],
  },
  {
    id: 3,
    name: "Livro Trio",
    price: 22.5,
    rating: 5,
    categories: ["Suspense", "Biografia"],
  },
];

export default function BookPage() {
  return <BookSearch books={BOOKS} categories={CATEGORIES} />;
}
