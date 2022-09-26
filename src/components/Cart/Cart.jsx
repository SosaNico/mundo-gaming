import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { ItemCart } from "./ItemCart";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, totalPrice, clear} = useCartContext();
  const confirm = () => {
    Swal.fire("Muchas Gracias", "Por su compra en Mundo Gaming", "success");
    /* clear() */
    };

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
      <button onClick={confirm} className="btn btn-outline-primary m-2">Finalizar Compra</button>
      </Link>
      <p className="fs-4 m-2">Total:</p>
      <p className="fs-3 m-2">${totalPrice()}</p>
      </div>
    </>
  );
};