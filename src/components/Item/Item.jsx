import React from 'react';
import Counter from "../Counter/Counter";
const Item = ({producto}) => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos!`);
    };
return(
<>
<div className='col-md-2 m-3'>
    <div className="card border-danger mb-3 text-center" style={{maxWidth: '20rem'}}>
        <div className="card-header"><img src={producto.image} alt={producto.image} className='img-fluid'/></div>
        <div className="card-body">
            <h4 className="card-title">{producto.name}</h4>
        </div>
        <Counter initial={1} stock={5} onAdd={onAdd}/>
    </div>
</div>
</>
);
};

export default Item;