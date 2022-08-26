import React from 'react'
import './MainContent.css'
import me from './assets/dibyendu-user.png'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import mail from './assets/mail.svg'
import twitter from './assets/twitter.svg'

export default function MainContent(){
    return(
        <>
        <div className='container'>
            <div className='img-container'>
                <img src={me} alt='Dibyendu Das' className='main-img' />
            </div>
            <div className='sub-container'>
                <h2 className='name'>Dibyendu Das</h2>
                <h4>Front-end Developer</h4>
                <a href="https://dibyendudas.in/" className='web'>dibyendudas.in</a>
                
                <div className='connect'>
                    {/* <button type="button">Email</button>
                    <button type="button">LinkedIn</button> */}
                    <a href="mailto:get2dibyendu@gmail.com" className='mail'><img src={mail} alt='mail'/>Email</a>
                    <a href="https://www.linkedin.com/in/dibyendu02/" className='linkedin'><img src={linkedin} alt='linkedin'/>LinkedIn</a>
                </div>
                <div className="about">
                <h3>About</h3>
                <p> 
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                </div>
                <div className="interests">
                    <h3> Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. 
                     Coffee fanatic.</p>
                </div>
                <div className="footer">
                    <a href="https://github.com/dibyendu02" className='github'><img src={github} alt=''/></a>
                    <a href="https://twitter.com/dasdibyenduu" className='twitter'><img src={twitter} alt='twitter'/></a>
                </div>
            </div>
        </div>
        </>
    )
}