export default function Symptoms() {
    return(
        <div className="container">
            <h2>SYMPTOMS</h2>
            <div className="symptoms">
                <div className="card">Fever</div>
                <div className="card">Headache & Sore Throat</div>
                <div className="card">Cough</div>
                <div className="card">Shortness Of Breath</div>
                <div className="card">Shaking Chills</div>
                <div className="card">Diarrhea</div>
            </div>
        <style jsx>{`
            .container {
                background-color: #fc5185;
                text-align: center;
                padding: 1em;
                margin-top: 1em;
            }
            h2 {
                color: white;
            }
            .symptoms {
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
                .symptoms {
                    max-width: 800px;
                    margin: 0 auto;
                }
            }
        `}</style>
        </div>
    );
}