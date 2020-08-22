import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContentView from './components/ContentView';

function App() {
    return (
        <main className="App">
            <div className="main-container-1">
                <Navbar />
                <div className="main-container-2">
                    <Header />
                    <ContentView />
                </div>
            </div>
        </main>
    );
}

export default App;
