import React from "react";
import { useCartContext } from "../Context/CartContext";
import { FaTrashAlt } from 'react-icons/fa'
import './ItemCart.css'

export const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();

return (
    <div className="card bg-dark border-light">
        <div className="row p-0 m-3">
                <div className="col-2 p-3">
                    <img src={product.image} className="img-fluid rounded-start" alt={product.name}/>
                </div>
            <div className="col-3 d-flex align-items-center">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                </div>
            </div>
            <div className="col-2 d-flex align-items-center">
                <div className="card-body">
                    <h5 className="py-3">Cantidad: {product.quantity}</h5>
                    <h5 className="py-3">Precio: ${product.price}</h5>
                </div>
            </div>
            <div className="col-1 d-flex align-items-center">
                <div className="card-body">
                    <h5>Subtotal: ${product.quantity * product.price}</h5>
                </div>
            </div>
            <div className="col-2 d-flex align-items-center ms-5">
                <div className="card-body m-2">
                    <button className="btn btn-danger" onClick={()=>removeItem(product.id)}><FaTrashAlt className="icon-trash"/></button>
                </div>
                    
            </div>
        </div>
    </div>
);
};