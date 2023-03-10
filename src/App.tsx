import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import NotFound from 'pages/NotFound';
import TaskBoard from 'pages/TaskBoard';
import Example from 'pages/Example';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace={true} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<TaskBoard />} />
                <Route path="/example" element={<Example />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
