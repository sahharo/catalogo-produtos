import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
};

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p className="price">R$ {product.price}</p>
        <p className="rating">Nota: {product.rating}</p>
        <p>{product.description}</p>
        <button className="back-button" onClick={() => navigate("/")}>
          ⬅ Voltar
        </button>
      </div>
    </div>
  );
}
