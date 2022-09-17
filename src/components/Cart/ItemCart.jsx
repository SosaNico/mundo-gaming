import React from "react";
import { useCartContext } from "../context/CartContext";
import { FaTrashAlt } from 'react-icons/fa'
import './ItemCart.css'



export const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();

return (
    <div className="card mb-3">
        <div className="row g-0">
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
                    <button className="btn btn-danger"><FaTrashAlt onClick={()=>removeItem(product.id)} className="icon-trash"/></button>
                    {/* <button onClick={()=>removeItem(product.id)} className="btn btn-danger">Borrar</button> */}
                </div>
                    
            </div>
        </div>
    </div>
);
};