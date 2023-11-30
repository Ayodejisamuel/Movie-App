import React from 'react';
import './intro.css';
import Ayodeji from '../../images/Ayodeji.jpg'

const Intro = () => {
    return (
        <div className='into'>
            <div className='introcontent'>
                <h3 className='hello'>Hello,</h3>
                <h2>I'm <span className='name'>Ayodeji</span></h2>

                <h2 className='frontend'> Frontend Developer</h2>

                <p className='introparag'>I am a skilled frontend developer
                    with experience in creating
                    responsive and visually appealing websites.</p>
            </div>
            <img src={Ayodeji} className='bgimg'></img>
        </div>

    )
}

export default Intro;