import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p><div className="downpage">
        <h1 className="sponsor">FAQ</h1>
        <h1 className="contact">CONTACT US</h1>
        <h1 className="overmad" id="abt" >Social Media</h1>
        <h1 className="thatsnew">Terms&Conditions</h1>
        <p className="met">TravlXTraker</p>
        <p className="ves">Email:travelxtraker18@gmail.com</p>
        <p className="hoof">Phone:+918610339565</p>
        <p className="geg">Landline:+912212345678</p>
        <p className="voor">Support:support@royal.com</p>
        <p className="klan">Head Office:Chennai</p>
        <h1 className="csb">Privacy policy</h1>
        <a href="https://www.facebook.com/">
          <img className="fb" src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
        <img className="insta" src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"></img>
      </a>
      <a href="https://web.whatsapp.com/">
      <img className="whatsapp" src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png"></img>
    </a>
      <a href="https://mail.google.com/mail/u/0/#inbox">
      <img className="mail" src="https://cdn-icons-png.flaticon.com/128/95/95627.png"></img>
    </a>
        <p className='rights'>@2023 TralxTraker. All rights reserved.</p>
        </div></p>
      </div>
    </footer>
  );
}

export default Footer;
