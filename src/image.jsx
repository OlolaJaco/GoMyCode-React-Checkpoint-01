import product from "./product.jsx";

function Image() {
    return(
        <img src={product.image} alt={product.name} />
    )
}

export default Image;