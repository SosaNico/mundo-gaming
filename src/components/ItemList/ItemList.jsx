import React from 'react';
import Item from '../Item/Item';
const ItemList = ({list}) => {

return(
    <>
    <div>
        <h1 className='d-flex justify-content-center m-3'>Productos</h1>
    </div>
    <div className='cards row justify-content-center'>
        {
            list.map(item => <Item item={item} key={item.id}/>)
        }
    </div>
    </>
    );
};

    export default ItemList;