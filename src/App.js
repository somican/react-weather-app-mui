import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputForm from './InputForm';
import Weather from './weatherApi';
function App() {
    return (
        <div className="App">
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Assignment #1
                    </Typography>
                </Toolbar>
            </AppBar>
            <header>
                <InputForm></InputForm>
                <Weather></Weather>
            </header>
        </div>
    );
}
export default App;

