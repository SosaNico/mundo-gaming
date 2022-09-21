import { React, useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getSelected = async(idItem) =>{
        try {
            const document =  doc(db, 'productos', idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)
            setIsLoading(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id])
    

    return (
        isLoading ? <ItemDetail item={item}/> : <h1>Cargando...</h1>
    );
};

export default ItemDetailContainer;