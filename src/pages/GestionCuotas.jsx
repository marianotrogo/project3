import React, { useState, useEffect } from "react";
import axios from "axios";

const GestionCuotas = () => {
    const [cuotas, setCuotas] = useState([]);
    const [formData, setFormData] = useState({
        socio: "",
        monto: "",
        fecha: "",
    });

    // Cargar cuotas al iniciar
    useEffect(() => {
        axios
            .get("http://localhost:3001/cuotas") // Cambiar al puerto del backend
            .then((response) => setCuotas(response.data))
            .catch((error) => console.error("Error fetching cuotas:", error));
    }, []);

    // Actualizar datos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/cuotas", formData)
            .then((response) => {
                setCuotas([...cuotas, response.data]);
                setFormData({ socio: "", monto: "", fecha: "" });
            })
            .catch((error) => console.error("Error adding cuota:", error));
    };

    return (
        <div>
            <h1>Gestión de Cuotas Sociales</h1>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="socio"
                    placeholder="Nombre Socio"
                    value={formData.socio}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="monto"
                    placeholder="Monto"
                    value={formData.monto}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Agregar Cuota</button>
            </form>

            {/* Tabla */}
            <table>
                <thead>
                    <tr>
                        <th>Socio</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cuotas.map((cuota) => (
                        <tr key={cuota._id}>
                            <td>{cuota.socio}</td>
                            <td>{cuota.monto}</td>
                            <td>{new Date(cuota.fecha).toLocaleDateString()}</td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GestionCuotas;