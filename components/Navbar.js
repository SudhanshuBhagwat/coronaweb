export default function Navbar() {
    return(
        <nav className="navbar">
            <h1>COVID-19</h1>
            <button className="btn">Helpline</button>
            <style jsx>
                {`
                    nav {
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .navbar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1em;
                    }
                    .btn {
                        border: none;
                        background-color: #fc5185;
                        padding: 0.8em;
                        border-radius: 0.4em;
                        color: white;
                    }
                `}
            </style>
        </nav>
    );
}