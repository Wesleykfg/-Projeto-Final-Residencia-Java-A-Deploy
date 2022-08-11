import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import './Navbar2.css';




function Navbar2() {
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar2" >
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/produtos" className="nav-links" >
                        Produtos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/form-produtos" className="nav-links" >
                        Inserir Produto
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/categorias" className="nav-links" >
                        Categorias
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/form-categorias" className="nav-links" >
                        Inserir Categoria
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sobre" className="nav-links" >
                        Sobre
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar2;