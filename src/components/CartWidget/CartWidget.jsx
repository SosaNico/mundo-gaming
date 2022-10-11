import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";
import { useCartContext } from '../Context/CartContext'
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart, totalProducts} = useCartContext()
    return (
        <>
        <Link to='./cart' className="text-decoration-none">
        <button className={`${cart.length === 0 ? "d-none" : "d-block btn btn-info ms-3"}`}>
            <TiShoppingCart className="icon" /><span className="number">{totalProducts()}</span>
        </button>
        </Link>
        </>
    );
};

export default CartWidget;
