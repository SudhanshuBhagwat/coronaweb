import Link from 'next/link';

export default function Table({ table }) {
    return(
        <div className="container">
            <div className="message">
                <h4>Stats By Country:</h4>
                <p>(Click on Country name to navigate to country’s head website)</p>
            </div>
            <table>
                <thead>
                    <th>Countries</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </thead>
                <tbody className="scroll">
                    {table.map((row, i) =>
                        <tr key={i}>
                            <td><Link href={row.refs[0] != null ? row.refs[0] : '' }><a>{row.countryName}</a></Link></td>
                            <td>{row.stats[0]}</td>
                            <td>{row.stats[1]}</td>
                            <td>{row.stats[2]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        <style jsx>{`
            .container {
                text-align: center;
                padding: 1em;
            }
            .message {
                display: block;
                margin-top: 0.6em;
                margin-bottom: 1.6em;
            }
            tr td:nth-child(1) {
                text-align: left;
            }
            th {
                background-color: #C4C4C4;
                padding: 0.2em;
                position: sticky;
                top: 0;
            }
            tr td {
                background-color: #F6F6F6;
                padding: 0.6em;
            }
            table {
                display: block;
                border-collapse: collapse;
                overflow-y: scroll;
                max-height: 400px;
                width: 100%;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            a {
                color: black;
                text-decoration: none;
            }
            @media (min-width: 800px) {
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                }
                th {
                    padding: 1em;
                }
                tr td {
                    padding: 1em;
                }
            }
        `}</style>
        </div>
    );
}