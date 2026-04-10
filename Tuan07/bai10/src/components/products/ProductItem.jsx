import React from "react";
import { useRecoilState } from "recoil";
import { cart } from "../../global_state/store";
import useGlobalMessage from "../../custom_hooks/useGlobalMessage";
import GlobalMessage from "../message/GlobalMessage";

const ProductItem = ({ product }) => {
  const [myCart, setMyCart] = useRecoilState(cart);

  const setMessage = useGlobalMessage();

  const addToCart = (tmpProduct) => {
    const checkCart = myCart.filter((item) => item.id === tmpProduct.id);
    if (checkCart.length >= 1) {
      console.log("hàm thêm đã chạy");
      const newCart = myCart.map((item) => {
        if (item.id === tmpProduct.id) {
          const tmpQuantity = item.quantity + 1;
          return { ...item, quantity: tmpQuantity };
        }
        return item;
      });
      setMessage(
        "Sản phẩm này đã tồn tại trong giỏ hàng, tăng số lượng thêm 1",
        "success",
      );
      setMyCart(newCart);
    } else {
      console.log("hàm thêm đã chạy");
      const newProduct = { ...tmpProduct, quantity: 1 };
      setMyCart([...myCart, newProduct]);
      setMessage("Thêm sản phẩm mới vào giỏ hàng thành công", "success");
    }
  };

  return (
    <div>
      <li>
        {product.title} - {product.category} - {product.price}
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </li>
    </div>
  );
};

export default ProductItem;
