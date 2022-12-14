import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { ItemCart } from "./ItemCart";

export const Cart = () => {
  const { cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col p-5 m-5">
              <h2>No hay productos seleccionados</h2>
              <Link to="/"><h3>Ir de compras</h3></Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <ItemCart key={item.id} product={item} />
      ))}
      <div className="d-flex justify-content-end m-5">
      <Link to="/checkout">
      <button className="btn btn-outline-primary m-2">Finalizar Compra</button>
      </Link>
      <p className="fs-4 m-2">Total:</p>
      <p className="fs-3 m-2">${totalPrice()}</p>
      </div>
    </>
  );
};