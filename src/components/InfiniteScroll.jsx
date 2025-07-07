import React, { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchProducts = () => {
      fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((res) => res.json())
        .then((data) => setProducts((prev) => [...prev, ...data.products]));
    };
    fetchProducts();
  }, [skip]);
  return (
    <div>
      <h1>InfiniteScroll</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}

      <button onClick={()=>setSkip((prev)=>prev+limit)}>Load More</button>
    </div>
  );
}
