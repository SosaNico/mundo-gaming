import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({item}) => {
return(
<>
<div className='cards-2 col-2 m-3'>
    <div className="card border-danger mb-3 justify-content-center text-center" style={{maxWidth: '20rem'}}>
        <div className="card-header"><img src={item.image} alt={item.image} className='img-fluid p-2'/></div>
        <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
        </div>
        <div>
            <Link to={`/detalles/${item.id}`}>
                <button className='btn btn-info m-3'>Ver mas detalles</button>
            </Link>
        </div>
    </div>
</div>
</>
);
};

export default Item;