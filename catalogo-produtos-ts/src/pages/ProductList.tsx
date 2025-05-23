import './ProductList.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
};

type SortOption = "price" | "title" | "";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "" || product.category === categoryFilter) &&
      (ratingFilter === "" || product.rating >= Number(ratingFilter)) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (sortOption === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "title") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="container">
      <h1 className="titulo">Catálogo de Produtos</h1>

      <div className="filtros">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar produto"
          className="busca"
        />

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">Todas categorias</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="">Todas notas</option>
          <option value="4">4+</option>
          <option value="3">3+</option>
          <option value="2">2+</option>
          <option value="1">1+</option>
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value as SortOption)}>
          <option value="">Ordenar por</option>
          <option value="price">Preço</option>
          <option value="title">Ordem alfabética</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>R$ {product.price}</p>
            <p>Nota: {product.rating}</p>
            <Link to={`/product/${product.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}