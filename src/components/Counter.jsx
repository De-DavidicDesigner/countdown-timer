import { useEffect, useState } from "react"

export default function Counter( { timer, onChange, onClick }) {

    return (
        <section id="set-time">
            <div className="input-unit">
                <p>
                    <label>Hour</label>
                    <input 
                        value={timer.hour} 
                        type="number"
                        onChange={(e) => onChange("hour", e.target.value)}
                        required 
                    />
                </p>
            </div>
            <div className="input-unit">
                <p>
                    <label>MINUTES</label>
                    <input 
                        value={timer.minute} 
                        type="number"
                        onChange={(e) => onChange("minute", e.target.value)}
                        required 
                    />
                </p>
            </div>
            <div className="input-unit">
                <p>
                    <label>SECONDS</label>
                    <input 
                        value={timer.second} 
                        type="number"
                        onChange={(e) => onChange("second", e.target.value)}
                        required 
                    />
                </p>
            </div>
            <div className="button">
                <button onClick={() => onClick()}>START</button>
            </div>
        </section>
    )
}