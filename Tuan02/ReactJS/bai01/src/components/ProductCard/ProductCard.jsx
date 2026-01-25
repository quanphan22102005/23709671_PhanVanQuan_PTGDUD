import "./ProductCard.css";
import iphoneImg from "../../assets/iPhone.jpg"

function ProductCard() {
  return (
    <div className="product-card">
        <img src={iphoneImg} alt="" className = "product-image"/>
        <h3 className = "product-name">Iphone 16 Promax</h3>
        <p className = "product-price">34.000.000</p>
        <button className = "add-to-cart">Add to cart</button>
    </div>
  );
}

export default ProductCard;