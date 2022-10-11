import React from "react";
import {AiOutlinePhone} from "react-icons/ai";
import {GoMail} from "react-icons/go";
import {FiMapPin} from "react-icons/fi";
import './Footer.css'
export const Footer = () => {
    return (
        <section className="d-flex">
            <div className=" d-flex bg-dark container-fluid justify-content-between">
                <h3 className="me-5 p-3 border-bottom border-5 border-primary rounded-3 footer">Contacto:</h3>
                <div className="d-flex">
                    <AiOutlinePhone className="footer-icon"/>
                    <h5 className="me-5 p-3 border-bottom border-5 border-primary rounded-3 footer">1154745484</h5>
                    <GoMail className="footer-icon"/>
                    <h5 className="me-5 p-3 border-bottom border-5 border-primary rounded-3 footer">mundogamingc@gmail.com</h5>
                    <FiMapPin className="footer-icon"/>
                    <h5 className="me-5 p-3 border-bottom border-5 border-primary rounded-3 footer">Yrigoyen N°865</h5>
                </div>
            </div>
        
        </section>
    );
};