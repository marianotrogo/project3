import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaDollarSign, FaStore, FaBox, FaUser } from "react-icons/fa"; // Iconos
import "../styles/sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="menu-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <h2>Club Manager</h2>
                <ul>
                    <li>
                        <Link to="/">
                            <FaHome />
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cuotas">
                            <FaDollarSign />
                            <span>Gestión de Cuotas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ventas">
                            <FaStore />
                            <span>Ventas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stock">
                            <FaBox />
                            <span>Stock</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/registro">
                            <FaUser />
                            <span>Registro</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;