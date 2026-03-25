import { useContext } from "react";
import { CartContext, ACTIONS } from "../context/CartContext";

const products = [
  { id: 1, name: "iPhone 15", price: 1000 },
  { id: 2, name: "MacBook M3", price: 2000 },
  { id: 3, name: "AirPods Pro", price: 250 },
];

export default function ProductList() {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Sản phẩm công nghệ</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}{" "}
          </span>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })
            }
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}
