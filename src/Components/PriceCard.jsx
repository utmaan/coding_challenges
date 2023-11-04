import productData from "../data.json"
import Product from "./Product";

const PriceCard = () => {
    return ( <div className="price_container">
        {productData.map((data)=>{
            return <Product product={data}/>
        })}
    </div> );
}
 
export default PriceCard;