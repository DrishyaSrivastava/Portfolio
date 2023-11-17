import React, { useRef } from 'react';
import './contact.css';
import Adobe from '../../assets/adobe.png';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fvutcgj', 'template_i8te9dr', form.current, 'hMVFz4aBPDIT4YbyM')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent.!');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactPage">
        <fiv id="clients">
            <h1 className="contactPageTitle">
                My Clients
            </h1>
            <p className="clientDesc">
                I have had the opportunity to work with the diverse group of companies.
                some of the notable companies i have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Pleae fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="facebookicon" className="link" />
                        <img src={TwitterIcon} alt="twittericon" className="link" />
                        <img src={YoutubeIcon} alt="youtubeicon" className="link" />
                        <img src={InstagramIcon} alt="instagramicon" className="link" />
                    </div>
                </form>
            </div>
        </fiv>
    </section>
  )
}

export default Contact;
