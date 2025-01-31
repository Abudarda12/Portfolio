import React,{useState} from 'react';
import './Nav.css';
export default function Nav(){
    const [isActive,setIsActive]=useState(false);
    const handleClick=()=>{
        setIsActive(!isActive);
    }
    return(
        <div className="nav">
            <div className="nav__logo">
                <h1>Abudarda Ansari</h1>
            </div>
            <div className={`nav__links ${isActive ? 'active' : ''}`}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <div className="resume">
                     <a href="/abudarda.pdf" download>
                     <button>Download CV</button>
                     </a>
                </div>
                <button className="nav__toggle" aria-label="Toggle navigation" onClick={handleClick}>
                &#9776;
                </button>
            </div>
            
           
        </div>
        
    )
}