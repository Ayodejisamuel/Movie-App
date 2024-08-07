import React from "react";
import './footer.css'
 

const Footer = () => {

let date = new Date()

let year = date.getFullYear()

// alert(year)
    return (
        <section id="footer">
            <p className="copywright">Copywrights @{year} all right reserve</p>
            
        </section>
    )
}

export default Footer;
