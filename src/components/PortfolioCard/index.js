import React from "react";
import "./styles.css";

function PortfolioCard(props) {
    return (
        <div className="card">
            <a href={props.href}><img className="card-img" src={props.src} alt={props.alt} /></a>
            {/* <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div> */}
        </div>
    )
}
export default PortfolioCard;