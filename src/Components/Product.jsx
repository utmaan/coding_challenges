const Product = ({product}) => {
    return ( <div className="product_container">
        <div className="product">
            <div className="product_detail">
                <img src={product.imgUrl} alt="" className="Product_icon"  width={'64px'} height={'64px'}/>
                <h1 className="product_name"> {product.name} </h1>
                <p className="product_description">{product.description}</p>
            </div>
            {product.features.map(feature=>{
             return<div className="feature">
                    <img src="assets/check.png" alt="" className="feature_available"  width={'64px'} height={'64px'}/>
                    <p className="feature_name">{feature}</p>
                </div>
            })}
            
        </div>
        <button className="select">Select</button>
    </div> );
}
 
export default Product;