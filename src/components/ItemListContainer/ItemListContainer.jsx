import React from "react";
import Counter from "../Counter/Counter";
const ItemListContainer = ({title}) =>{
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos!`);
    };
    return(
        <>
        <h1 className='text-center p-3'>{title}</h1>
        <Counter stock={5} onAdd={onAdd}/>
        </>
    );
};

export default ItemListContainer;