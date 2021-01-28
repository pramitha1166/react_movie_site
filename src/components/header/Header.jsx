import React from 'react'
import "./Header.css"
import Logo from "../../movie-logo.png"
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WebIcon from '@material-ui/icons/Web';

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <div className="nav-brand">
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <button>
                                <HomeIcon />
                                <p>Home</p>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button>
                                <TrendingUpIcon />
                                <p>Trending Movies</p>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button>
                                <WebIcon />
                                <p>Browse Movies</p>
                            </button>
                        </a>
                    </li>
                </ul>
                <div className="menu-icon-container">
                    <MenuIcon className="menu-icon" />
                </div>
            </nav>
        </header>
    )
}

export default Header
