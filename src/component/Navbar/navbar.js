import React from 'react';
import './navbar.css';


const Navbar = () => {


    return (
        <div className='navbar'>
            <div>
                <h2>Logo Image</h2>
            </div>
            <div className='links'>

                <a href='' className='active'>Home</a>

                <a href=''>About</a>


                <a href=''>Portfolio</a>


                <a href=''>Clients</a>
            </div>
            <div>
                <button className='contactbtn'>Contact me</button>


            </div>


        </div>

    )

}

export default Navbar;