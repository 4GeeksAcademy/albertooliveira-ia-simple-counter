import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";
import Home from "./components/Home.jsx";

const MainApp = () => {
    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(true);
    const [isCountdown, setIsCountdown] = useState(false);
    const [alertTime, setAlertTime] = useState(null);

    useEffect(() => {
        let interval = null;

        if (active) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (alertTime !== null && prevSeconds === parseInt(alertTime)) {
                        alert(`¡Alerta! Se alcanzó el segundo: ${alertTime}`);
                        setAlertTime(null);
                    }

                    if (isCountdown) {
                        return prevSeconds > 0 ? prevSeconds - 1 : 0;
                    }

                    return prevSeconds + 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [active, isCountdown, alertTime]);

    const handleCountdown = () => {
        const time = prompt("¿Desde qué segundo inicia la cuenta regresiva?");
        if (time !== null && !isNaN(time) && time !== "") {
            setSeconds(parseInt(time));
            setIsCountdown(true);
            setActive(true);
        }
    };

    const handleAlertSetup = () => {
        const time = prompt("¿En qué segundo quieres la alerta?");
        if (time !== null && !isNaN(time) && time !== "") {
            setAlertTime(time);
        }
    };

    const resetCounter = () => {
        setSeconds(0);
        setIsCountdown(false);
        setActive(true);
    };

    return (
        <div className="container-fluid bg-dark vh-100 p-5">
            <Home seconds={seconds} />

            <div className="text-center mt-5">
                <div className="btn-group mb-3" role="group">
                    <button className="btn btn-outline-danger btn-lg" onClick={() => setActive(false)}>Parar</button>
                    <button className="btn btn-outline-success btn-lg" onClick={() => setActive(true)}>Resumir</button>
                    <button className="btn btn-outline-warning btn-lg" onClick={resetCounter}>Reiniciar</button>
                </div>

                <div className="mt-3">
                    <button className="btn btn-info mx-2 text-white" onClick={handleCountdown}>Cuenta Regresiva</button>
                    <button className="btn btn-secondary mx-2" onClick={handleAlertSetup}>Configurar Alerta</button>
                </div>
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);
