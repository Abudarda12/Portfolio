import './Nav.css';
export default function Nav(){
    return(
        <div className="nav">
            <div className="nav__logo">
                <h1>Abudarda Ansari</h1>
            </div>
            <div className="nav__links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <div className="resume">
                     <a href="/abudarda.pdf" download>
                     <button>Download CV</button>
                     </a>
                </div>
            </div>
            
           
        </div>
        
    )
}