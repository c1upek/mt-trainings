import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Trainings from "./routes/Trainings";

function App() {
    return (
        <div className="p-4">
            <Routes>
                <Route path="/" element={<Trainings />} />
            </Routes>
        </div>
    );
}

export default App;
