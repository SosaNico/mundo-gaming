import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import productos from '../data/productos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{

    const [producto, setProductos] = useState([]);
    const {categoria} = useParams();

    const getProdData = () => new Promise((res,rej) => {
        if(categoria){
            setTimeout(() => res(productos.filter(item => item.category === categoria)),);
        }else{
            setTimeout(() => res(productos),);
        };
    });

    useEffect(() => {
        getProdData()
        .then(productos => setProductos(productos))
        .catch(error => console.log(error));
    }, [categoria]);

    return (
    <>
    <ItemList list={producto}/>
    </>
    );
};

export default ItemListContainer;