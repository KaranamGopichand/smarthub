import { useState, useEffect } from "react";

function ProductList({ title }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const [products, setProducts] = useState([]);

  useEffect(() => {
  const controller = new AbortController();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://dummyjson.com/products?limit=10",
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (!controller.signal.aborted) {
        setProducts(data.products);
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        console.error("API error:", err);
        setError("Unable to load products.");
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  };

  fetchProducts();

  return () => controller.abort();
}, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>{title}</h2>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading ? (
  <p>Loading products...</p>
) : error ? (
  <p role="alert">{error}</p>
) : filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <p key={product.id}>
      {product.title} - ${product.price}
    </p>
  ))
) : (
  <p>No products found.</p>
)}
    </section>
  );
}

export default ProductList;