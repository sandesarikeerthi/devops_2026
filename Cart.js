import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "T-Shirt", color: "Red", price: 20, quantity: 1 },
    { id: 2, name: "Jeans", color: "Blue", price: 40, quantity: 1 },
    { id: 3, name: "Shoes", color: "Black", price: 60, quantity: 1 },
    { id: 4, name: "Jacket", color: "Green", price: 80, quantity: 1 },
    { id: 5, name: "Cap", color: "Orange", price: 10, quantity: 1 },
  ]);

  const increment = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const reset = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: 0 } : item
    ));
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>

      {/* HORIZONTAL CONTAINER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
        ))}
      </div>

      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Total Price: ${totalPrice}
      </h2>
    </div>
  );
}

export default Cart;
