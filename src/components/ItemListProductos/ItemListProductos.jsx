import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import productos from '../data/productos';



function ItemListProductos() {
    const [producto, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getProdData = new Promise((res,rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000)
        });

            getProdData.then((response) => {
                setProductos(response);
                setIsLoading();
            });
    }, []);

    return isLoading ? <h2 className='ms-5 text-center'>Cargando...</h2> : <ItemList list={producto}/>;
};

export default ItemListProductos;