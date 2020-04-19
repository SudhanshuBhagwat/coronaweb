export default function Precautions() {
    return(
        <div className="container">
            <h2>Precautions</h2>
            <div className="precautions">
                <div className="card">Stay Home</div>
                <div className="card">Keep A Safe Distance</div>
                <div className="card">Wash Hands Often</div>
                <div className="card">Cover Your Cough</div>
                <div className="card">Sick? Call The Helpline</div>
                <div className="card">Avoid Touching Your Face</div>
            </div>
        <style jsx>{`
            .container {
                text-align: center;
                padding: 1em;
                margin-top: 1em;
            }
            .precautions {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 1em;
                padding: 0.4em;
                margin-top: 1em;
            }
            .card {
                background-color: #F0F0F0;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.3em;
                border-radius: 0.4em;
                font-weight: bold;
            }
            @media (min-width: 800px) {
                .card {
                    height: 4.5em;
                    margin-right: 1em;
                    margin-left: 1em;
                }
                .card p {
                    margin-top: 0.4em;
                }
                .precautions {
                    max-width: 800px;
                    margin: 0 auto;
                }
            }
        `}</style>
        </div>
    );
}