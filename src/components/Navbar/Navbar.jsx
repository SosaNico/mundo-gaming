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
                        <Link to='/'>
                            <li className="nav-link active">Home</li>
                        </Link>
                        <Link to='/categoria/silla'>
                            <li className="nav-link active">Silla</li>
                        </Link> 
                        <Link to='/categoria/placa'>
                            <li className="nav-link active">Placa</li>
                        </Link> 
                        <Link to='/categoria/memoria'>
                            <li className="nav-link active">Memorias</li>
                        </Link>
                        <Link to='/categoria/gabinete'>
                            <li className="nav-link active">Gabinetes</li>
                        </Link>
                            <CartWidget/>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    </>
);
};

export default Navbar;
