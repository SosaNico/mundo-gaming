import React from 'react';
import Item from '../Item/Item';
const ItemList = ({list}) =>{
return(
    <>
{list.map((producto) => (
    <Item producto={producto} key={producto.id}/>
    ))}
</>
)}



export default ItemList;