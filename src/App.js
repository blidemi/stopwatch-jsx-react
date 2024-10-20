import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const timestop = () => {
        setLaps((prevLaps) => [...prevLaps, (time / 1000).toFixed(2)]);
        setTime(0);
    };

    return (
        <div className="container">
            <h1>Stopwatch</h1>
            <div id="time">{(time / 1000).toFixed(2)}</div>
            <button onClick={start} disabled={isRunning}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={timestop}>Timestop</button>

            <div id="flajok">
                {laps.map((lap, index) => (
                    <p key={index}>{lap}</p>
                ))}
            </div>
        </div>
    );
}

export default App;
