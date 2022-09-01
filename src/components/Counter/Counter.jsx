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
    <div className='text-center'>
        <div>
            <p className='m-3'>Stock: {stock}</p>
            <p className='m-3'>Cantidad: {count}</p>
            <div>
                <button className='btn btn-success m-3' onClick={add}>+</button>
                <button className='btn btn-light m-3' onClick={reset}>Reset</button>
                <button className='btn btn-danger m-3' onClick={substract}>-</button>
            </div>
            <div>
            <button className='btn btn-info  m-3' onClick={() => onAdd(count)}>Confirmar</button>
            </div>
        </div>
    </div>
    
    );
};

export default Counter;