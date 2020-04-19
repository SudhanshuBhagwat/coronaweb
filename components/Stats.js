export default function Stats({ world }) {
    return(
        <div className="container">
            <h1>Corona COVID-19 Virus</h1>
            <div className="stats">
                <div className="card">
                    <h4>Total Cases</h4>
                    <p>{world[0]}</p>
                </div>
                <div className="card">
                    <h4>Total Deaths</h4>
                    <p>{world[1]}</p>
                </div>
                <div className="card">
                    <h4>Total Recovered</h4>
                    <p>{world[2]}</p>
                </div>
            </div>
            <style jsx>{`
                h1 {
                    font-weight: extra-bold
                    margin: 0;
                    padding: 0;
                }
                .container {
                    text-align: center;
                    padding: 1em;
                    margin-top: 1em;
                }
                .stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 1em;
                }
                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: #43dde6;
                    padding: 0.6em;
                    border-radius: 0.8em;
                    margin-top: 2em;
                }
                @media (min-width: 800px) {
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .card {
                        height: 5em;
                        margin-right: 1em;
                        margin-left: 1em;
                    }
                    .card p {
                        margin-top: 0.4em;
                    }
                    .card:nth-child(1) {
                        margin-left: 0;
                    }
                    .card:last-child {
                        margin-right: 0;
                    }
                }
            `}</style>
        </div>
    );
}