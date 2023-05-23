import { Link, } from "react-router-dom"


export const Item = ({productName, price, imgUrl, productLink}) => {

    return (
        <Link className="each-item" to={productLink}>
            <img src={imgUrl} alt="" />
            <h5 className="each-item-name">{productName}</h5>
            <h6 className="each-item-price">{price}</h6>
        </Link>
    )
}