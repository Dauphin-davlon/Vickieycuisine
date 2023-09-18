import react from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return(
        <div class="top">
            <h1>Vickiey's cuisine</h1>
            <div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#About">About Vickiey</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

