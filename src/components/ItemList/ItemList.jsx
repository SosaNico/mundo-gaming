import React from 'react';
import Item from '../Item/Item';
const ItemList = ({list}) => {

return(
    <>
    <div className='cards row justify-content-center'>
        {
            list.map(item => <Item item={item} key={item.id}/>)
        }
    </div>
    </>
    );
};

    export default ItemList;