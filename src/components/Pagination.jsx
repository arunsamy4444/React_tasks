import React, { useEffect, useState } from "react";

export default function Pagination() {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchingproducts = () => {
      fetch(`https://dummyjson.com/products?limit=5&skip=${(page - 1) * 5}`)
        .then((res) => res.json())
        .then((data) => setproducts(data.products));
      console.log(products);
    };
    fetchingproducts();
  }, [page]);
  return (
    <div>
      <h1>Pagination</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Nxt</button>
    </div>
  );
}
