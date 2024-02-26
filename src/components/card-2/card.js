import React from 'react';
import './card.css';
import profile from './profilePic.png';

function LinkCard() {
  return (
    <section>
      <div className='card-container'>
        <div className='profile-container'>
          <div className='picture-container'>
            <img src={profile} alt='profile'></img>
          </div>
          <div className='detail-container'>
            <h1 className='Name'>Ansh Bhatt</h1>
            <p className='occupation'>Full-Stack Developer | Photographer</p>
          </div>
          <div className='button-container'>
            <button className='button'><a href='mailto:anshbhatt140@gmail.com' className='email'>Get in touch</a></button>
          </div>
          <div className='link-container'>
            <div class="wrapper">
              <div class="icon instagram">
                <div class="tooltip">
                  Instagram
                </div>
                <a href ="https://www.instagram.com/binary_ansh/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div class="icon linkedin">
                <div class="tooltip">
                  Linkedin
                </div>
                <a href ="https://www.linkedin.com/in/ansh-bhatt-py">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div class="icon github">
                <div class="tooltip">
                  Github
                </div>
                <a href ="https://github.com/BhattAnsh">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>

              <div class="icon twitter">
                <div class="tooltip">
                  Twitter
                </div>
                <a href ="https://twitter.com/AnshBhatt906">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='image-container'>
        </div>
      </div>
    </section>
  )
}

export default LinkCard;