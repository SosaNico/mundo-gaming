import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import db from '../../firebase/config'
import { useCartContext } from '../Context/CartContext'
import Swal from "sweetalert2";
import "./Checkout.css"
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {cart, totalPrice, clear} = useCartContext()
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email:'',
        Telefono:''
    })
    const {Nombre, Email, Telefono} = buyer;
    const confirm = () => {
        Swal.fire("Muchas Gracias", "Por su compra en Mundo Gaming", "success");
        clear()
        };
    const generateOrder = async(data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            confirm()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const items = cart.map(e=>{return {id:e.id,title:e.name,price:e.price,quantity:e.quantity}})
        const date = new Date()
        const total = totalPrice()
        const data = {buyer,items,date,total}
        generateOrder(data)
    }
    
    return (
        <>
            {!orderId ? <>
    
                <form onSubmit={handleSubmit} className='text-center'>
        <h1 className='m-5'>Finalizando Compra</h1>
        <hr className='m-3'/>
            <h3 className="m-5">Completar Datos:</h3>
            <div className='form m-4'>
                <input type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} />
            </div>
            <div className='form m-4'>
                <input type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} />
            </div>
            <div className='form m-4'>
                <input type="number" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange} />
            </div>
            
            <button className='btn btn-info my-5 form' onClick={()=>clear()}>Enviar</button>
        </form>
            </>
            : <>
            <div className="container-fluid text-center">
                <div className="row m-5 py-3">
                    <div className="col p-5 m-3 text-center">
                            <h2><b>Su orden de compra es:</b><p className='text-success m-5'>{orderId}</p></h2>
                            
                                <h3 className='p-5'><Link to="/">Ir de compras</Link></h3>
                            
                    </div>
                </div>
            </div>
            
            </>}
        </>
        )
    }
    
    export default Checkout