import { React, useState }from 'react';
import Counter from "../Counter/Counter";
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {
    const [show,setshow] = useState(true)

    const { addItem } = useCartContext();

    const onAdd = (count) =>{
        setshow(false)
        addItem(item, count);
        let stock = item.stock - count
        item.stock = stock
    }

return (
    <>
    <article className='m-3 d-grid d-flex'>
        <div className='col-6 border border-5 border-secondary rounded-5 p-3'>
        <h2 className='d-flex justify-content-center'>{item.name}</h2>
        <div className='card-detail-left d-flex justify-content-center'>
            <img src={item.image} alt={item.name} className='img w-50' />
        </div>
        </div>
        <div className='d-flex justify-content-center'>
        <div className='col-6 border border-3 border-danger rounded-5 p-3 text-center'>
            <h4>{item.description}</h4>
            <h5 className='price text-center'>Precio: ${item.price}</h5>
            {show ? <Counter initial={1} stock={5} onAdd={onAdd}/> : 
            <Link to='/cart'>
            <button className='btn btn-info m-3'>Ir al carrito</button>
            </Link>}
        </div>
        </div>
    </article>
    </>
);
};

export default ItemDetail