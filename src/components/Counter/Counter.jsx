import {useState} from 'react';

function Counter({stock, onAdd, initial}) {
    const [count, setCount] = useState(initial);

    function add(){
        if(count < stock){
            setCount(count + 1);
        };
    };

    function substract(){
        if(count > initial){
            setCount(count - 1);
        };
    };

    function reset(){
        setCount(initial);
    };

return (
    <div className='text-center m-5'>
        <div>
            <h5 className='m-3'>Stock: {stock}</h5>
            <h5 className='m-3'>Cantidad: {count}</h5>
            <div>
                <button className='btn btn-success m-3' onClick={add}>+</button>
                <button className='btn btn-light m-3' onClick={reset}>Borrar</button>
                <button className='btn btn-danger m-3' onClick={substract}>-</button>
            </div>
            <div>
                <button className='btn btn-info m-3' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
    );
};

export default Counter;