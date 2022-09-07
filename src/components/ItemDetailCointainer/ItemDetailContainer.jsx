import React, { useEffect, useState } from 'react';
import productos from '../data/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        const getData = new Promise((res) => {
            setTimeout(() => res(productos),);
        });
        getData
        .then((res) => setItem(res.find((product) => product.id === id)))
        .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`))
        .finally(() => setIsLoading(true));
    }, []); 

    return (
        isLoading ? <ItemDetail item={item}/> : <h1>Cargando...</h1>
    );
};

export default ItemDetailContainer;