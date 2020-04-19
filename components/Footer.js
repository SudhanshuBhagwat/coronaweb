import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return(
        <div className="container">
            <h3>Created By: Sudhanshu Bhagwat</h3>
            <div className="follow">
                <h3>Follow me on {<FontAwesomeIcon icon={ faInstagram }/>} : {<Link href="https://www.instagram.com/chinu_bhagwat/"><a>@chinu_bhagwat</a></Link>}</h3>
            </div>
        <style jsx>{`
            .container {
                background-color: #364f6b;
                padding: 3em;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 1em;
                flex-direction: column;
            }
            .follow {
                margin-top: 0.8em;
            }
            a {
                color: white;
            }
        `}</style>
        </div>
    );
}