import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    let OldPrices=["12,495","10,560","4,500","689"];
    let NewPrices=["10,000","8,560","2,500","489"];
    let Description=["8,000 DPI","Intuitive Surface","Designed for Ipad Pro","Wireless"]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx]}</p>
            <Price OldPrice={OldPrices[idx]} NewPrice={NewPrices[idx]}/>
        </div>
    );
}
export default Product;