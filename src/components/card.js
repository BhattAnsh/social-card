import React from 'react'
import './card.css'
import profile from './profilePic.png'
import insta from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import mail from './social.png'
function LandingCard() {
  return (
    <div className='card-container'>
      <div className='profile-container'>
        <div className='profile-image-container'>
          <img src={profile} alt='profile here' className='profile'></img>
        </div>
        <div className='details'>
          <h1 className='name'>Ansh Bhatt</h1>
          <p className='about'>Full-Stack Developer | Photographer</p>
        </div>
      </div>
      <div className='link-container'>
        <div className='all_social'>
          <h1 className='social-heading'>Social Media</h1>
          <div className=' row first-row'>
            <div className='col r1-col-1'>
              <a href='https://www.instagram.com/anshbhatt.py/'><img src={insta} alt='insta'></img> Capturing Life</a>
            </div>
            <div className='col r1-col-2'>
              <a href='https://www.instagram.com/binary_ansh/'><img src={insta} alt='insta'></img> Coding Dose</a>
            </div>
          </div>
          <div className='row second-row'>
            <div className='col r2-col-1'>
              <a href='https://www.instagram.com/cinematic_ansh/'><img src={insta} alt='insta'></img> Cinematic Dose</a>
            </div>
            <div className='col r2-col-2'>
              <a href='www.linkedin.com/in/ansh-bhatt-pyinematic_ansh/'><img src={linkedin} alt='linkedin'></img> Ansh Bhatt</a>
            </div>
          </div>
          <div className='row third-row'>
            <div className='col r3-col-1'>
              <a href='https://twitter.com/AnshBhatt906'><img src={twitter} alt='twitter'></img> Ansh's X</a>
            </div>
            <div className='col r3-col-2'>
              <a href='mailto:anshbhatt140@gmail.com'><img src={mail} alt='mail'></img> Mail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingCard