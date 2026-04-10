import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cart, calculate } from "../globalState/store";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [listProduct, setListProduct] = useRecoilState(cart);

  const increase = (id) => {
    const newProducts = listProduct.map((item) => {
      if (item.id === id) {
        const tmp = item.quantity + 1;
        return { ...item, quantity: tmp };
      }
      return item;
    });

    setListProduct(newProducts);
  };

  const decrease = (id) => {
    const newProducts = listProduct.map((item) => {
      if (item.id === id) {
        const tmp = item.quantity - 1;
        return { ...item, quantity: tmp };
      }
      return item;
    });

    setListProduct(newProducts);
  };

  //   const sumPrice = () => {
  //     let tongTien = 0;
  //     listProduct.map((item) => {
  //       tongTien += item.price * item.quantity;
  //     });

  //     return tongTien;
  //   };

  const tongTien = useRecoilValue(calculate);
  return (
    <div>
      <ul>
        {listProduct.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            increase={increase}
            decrease={decrease}
          ></ProductItem>
        ))}
      </ul>
      <h3>Tổng tiền: {tongTien}</h3>
    </div>
  );
};

export default ProductList;
