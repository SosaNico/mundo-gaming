import React from 'react';
import ItemListProductos from '../ItemListProductos/ItemListProductos';

const ItemListContainer = ({title}) =>{
    return (
        <>
        <h1 className='text-center p-3'>{title}</h1>
        <div className='row justify-content-center'><ItemListProductos/></div>
        </>
    );
};

export default ItemListContainer;