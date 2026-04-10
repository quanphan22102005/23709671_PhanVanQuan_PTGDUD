import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { products } from "../../global_state/store";
import ProductItem from "./ProductItem.jsx";
import GlobalMessage from "../message/GlobalMessage.jsx";

const ProductsList = () => {
  const [myProducts, setMyProducts] = useRecoilState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      setMyProducts((prev) => ({ ...prev, loading: true }));
      try {
        const res = await fetch("https://dummyjson.com/products");
        const fetchProducts = await res.json();

        setMyProducts((prev) => ({ ...prev, data: fetchProducts.products }));
      } catch (errorMessage) {
        setMyProducts((prev) => ({ ...prev, error: errorMessage }));
      } finally {
        setMyProducts((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <GlobalMessage></GlobalMessage>
      <ul>
        {myProducts.data.map((item) => (
          <ProductItem key={item.id} product={item}></ProductItem>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
