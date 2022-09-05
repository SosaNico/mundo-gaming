import React from 'react';
import Counter from "../Counter/Counter";

const ItemDetail = ({item}) => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos!`);
    };
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
        <div className='col-6 border border-3 border-danger rounded-5 p-3'>
            <h4>{item.description}</h4>
            <h5 className='price text-center'>Precio: ${item.price}</h5>
            <Counter initial={1} stock={5} onAdd={onAdd}/>
        </div>
        </div>
    </article>
    </>
);
};

export default ItemDetail