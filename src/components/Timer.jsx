export default function Timer({ format, onClick }) {
    return (
        <section id="timer">
            <div className="time-counter">{format()}</div> 
            <div className="button">
                <button className="button" onClick={onClick}>Restart</button>
            </div>
        </section>
    )
}