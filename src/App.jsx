import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
