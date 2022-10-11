import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <>
    <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="logo navbar-brand" to='/'>
                    <img src="/img/logo.jpg" alt="Logo" className='w-100 rounded-circle'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <Link to='/' className='links'>
                            <li className="nav-link active links-2 text-warning">Home</li>
                        </Link>
                        <Link to='/categoria/silla' className='links'>
                            <li className="nav-link active links-2 text-warning">Silla</li>
                        </Link> 
                        <Link to='/categoria/placa' className='links'>
                            <li className="nav-link active links-2 text-warning">Placa</li>
                        </Link> 
                        <Link to='/categoria/memoria' className='links'>
                            <li className="nav-link active links-2 text-warning">Memorias</li>
                        </Link>
                        <Link to='/categoria/gabinete' className='links'>
                            <li className="nav-link active links-2 text-warning">Gabinetes</li>
                        </Link>
                            <CartWidget/>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </>
);
};

export default Navbar;
