import React, { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]); // ✅ use better name
  // hardcoded product list
  const products = [
    { id: 1, name: "Shirt", price: 100 },
    { id: 2, name: "Shoes", price: 250 },
    { id: 3, name: "Hat", price: 50 },
  ];

  const addtoCart = (i) => {
    setCart([...cart, i]);
  };
  const removefromCart = (id) => {
    const newCart = [];
    let removed = false;
    for (let item of cart) {
      if (item.id === id && !removed) {
        removed = true;
      } else {
        newCart.push(item);
      }
    }
    setCart(newCart);
  };

  return (
    <div>
      <h1>ShoppingCart</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h4>
            Name - {item.name} : Price - {item.price}
          </h4>
          <button onClick={() => addtoCart(item)}>Add to Cart</button>
        </div>
      ))}

      <h2>Add to Cart section bruhhhh</h2>
      {cart.map((i, index) => (
        <p key={index}>
          {i.name} - ₹{i.price}{" "}
          <button onClick={() => removefromCart(i.id)}>❌ Remove</button>
        </p>
      ))}
    </div>
  );
}
