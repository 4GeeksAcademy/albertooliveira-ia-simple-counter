import React, { useState, useEffect } from "react";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(true);

    useEffect(() => {
        let interval = null;

        if (active) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [active]);

    const handleAlert = () => {
        let userTime = prompt("¿En qué segundo quieres la alerta?");
    };

    let unit = seconds % 10;
    let tens = Math.floor(seconds / 10) % 10;
    let hundreds = Math.floor(seconds / 100) % 10;
    let thousands = Math.floor(seconds / 1000) % 10;
    let tenThousands = Math.floor(seconds / 10000) % 10;
    let hundredThousands = Math.floor(seconds / 100000) % 10;

    return (
        <div className="text-center mt-5">
            <div className="d-flex justify-content-center bg-black text-white p-3 rounded mx-auto" style={{width: "fit-content"}}>
                <div className="bg-dark m-1 p-3 rounded display-3"><i className="far fa-clock"></i></div>
                <div className="bg-dark m-1 p-3 rounded display-3">{hundredThousands}</div>
                <div className="bg-dark m-1 p-3 rounded display-3">{tenThousands}</div>
                <div className="bg-dark m-1 p-3 rounded display-3">{thousands}</div>
                <div className="bg-dark m-1 p-3 rounded display-3">{hundreds}</div>
                <div className="bg-dark m-1 p-3 rounded display-3">{tens}</div>
                <div className="bg-dark m-1 p-3 rounded display-3">{unit}</div>
            </div>

            <div className="mt-4">
                <button className="btn btn-danger mx-1" onClick={() => setActive(false)}>Parar</button>
                <button className="btn btn-success mx-1" onClick={() => setActive(true)}>Resumir</button>
                <button className="btn btn-warning mx-1" onClick={() => setSeconds(0)}>Reiniciar</button>
            </div>
        </div>
    );
};

export default Home;