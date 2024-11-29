import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import TodoForm from './pages/TodoForm';
import Header from './components/Header';


function App() {
    return (
        <Router>
            <ErrorBoundary>
                <Header />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/todo' element={<TodoForm />} />
                    <Route path='*' element={<div>Oops, no such page :(</div>} />
                </Routes>
            </ErrorBoundary>
        </Router>

    );
}

export default App;
