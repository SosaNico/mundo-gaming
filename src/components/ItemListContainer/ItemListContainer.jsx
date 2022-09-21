import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import db from '../../firebase/config';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () =>{

    const [producto, setProductos] = useState([]);
    const {categoria} = useParams();

    const getData = async(categoria) =>{
        try{
            const document = categoria ? query(collection(db, "productos"), where('category', '==', categoria)) 
            :collection(db, "productos")
            const col = await getDocs(document)
            console.log("col.docs", col.docs)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()}) 
            setProductos(result)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getData(categoria)
    }, [categoria])
    

    return (
    <>
    <ItemList list={producto}/>
    </>
    );
};

export default ItemListContainer;