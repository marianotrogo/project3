import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GestionCuotas from "./pages/GestionCuotas";
import Inicio from "./pages/Inicio";
import Ventas from "./pages/Ventas";
import Stock from "./pages/Stock";
import Registro from "./pages/Registro";
import './styles/app.css'

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/cuotas" element={<GestionCuotas />} />
                        <Route path="/ventas" element={<Ventas />} />
                        <Route path="/stock" element={<Stock />} />
                        <Route path="/registro" element={<Registro />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;