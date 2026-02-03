import React from "react";

function CartItem({ item, increment, decrement, reset }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "220px",
        borderRadius: "8px",
        backgroundColor: item.color.toLowerCase(),
        color: "white",
        textAlign: "center",
      }}
    >
      <h3>{item.name}</h3>
      <p>Color: {item.color}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={() => increment(item.id)}>+</button>
      <button
        onClick={() => decrement(item.id)}
        disabled={item.quantity === 0}
        style={{ margin: "0 8px" }}
      >
        -
      </button>
      <button onClick={() => reset(item.id)}>Reset</button>
    </div>
  );
}

export default CartItem;
