import { Routes, Route } from "react-router-dom";
import Login from './../components/Login';
import Dashboard from './../components/Dashboard'


const Main = () => (
    <main>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </main>
);

export default Main;