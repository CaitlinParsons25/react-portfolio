import React from 'react';

function Nav() {
    return (
        <header className="flex-row">
            <h1>
                <a href="/">Caitlin Parsons</a>
            </h1>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;