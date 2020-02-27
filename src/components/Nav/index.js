import React from "react";
import "./styles.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <a className="navbar-brand" href="/">
                Mark Bernstein
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse">
                <a className="nav-item nav-link" href="/about">About Me</a>
                <hr></hr>
                <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                <hr></hr>
                <a className="nav-item nav-link" href="https://github.com/Mark-Bernstein">Github</a>
                <hr></hr>
                <a className="nav-item nav-link" href="https://www.linkedin.com/in/mark-bernstein-b287948a/">LinkedIn</a>
            </div>
        </nav>
    );
}

export default Nav;