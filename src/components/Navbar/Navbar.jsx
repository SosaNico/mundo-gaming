import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
return (
    <>
<div className="">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
    <a className="navbar-brand" href="/mundo-gaming/public/index.html">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
    </button>
<div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav me-auto">
        <li className="nav-item">
            <a className="nav-link active" href="/mundo-gaming/public/index.html">Home
                <span className="visually-hidden">(current)</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/mundo-gaming/public/index.html">Features</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/mundo-gaming/public/index.html">Pricing</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/mundo-gaming/public/index.html">About</a>
        </li>
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
}

export default Navbar;
