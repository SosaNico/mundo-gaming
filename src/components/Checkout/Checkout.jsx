import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../../firebase/config'
import { useCartContext } from '../context/CartContext'

const Checkout = () => {
    const {cart, totalPrice, clear} = useCartContext()
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email:'',
        Telefono:''
    })
    const {Nombre, Email, Telefono} = buyer;

    const generateOrder = async(data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log("OrdenNro:", order)
            setOrderId(order.id)
            clear()
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
        console.log('data', data)
        generateOrder(data)
    }
    
  return (
    <>
        {!orderId ? <>

    <form onSubmit={handleSubmit}>
        <h1>Finalizando Compra</h1>
        <hr />
            <h4>Completar Datos:</h4>
            <input type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} />
            <br/> <br/>
            <input type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} />
            <br/> <br/>
            <input type="number" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange} />
            <br/> <br/>
            <button className='btn btn-success'>Finalizar Compra</button><br /><br />
            <Link to="/">
            <button className='btn btn-danger' onClick={()=>clear()}>Cancelar Compra</button>
            </Link>
        </form>
        </>
        : 
        <h4>Su orden de compra es: {orderId}</h4>}
    </>
  )
}

export default Checkout