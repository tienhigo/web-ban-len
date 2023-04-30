import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube,BsInstagram } from 'react-icons/bs'
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return <>
  <footer className='py-4'>
    <div className='container.xxl' style={{ margin: 'auto', maxWidth: '1320px' }}>
      <div className='row align-items-center'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align align-items-center'>
            <img src={newsletter} alt="newsletter"/>
            <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
          </div>
        </div>
        <div className='col-7'>
        <div className="input-group">
              <input 
              type="text" 
              className="form-control py-2"
                placeholder="Your email address"
                aria-label="Your email address"
                aria-describedby="basic-addon2" />
              <span class="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
            </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className='container.xxl' style={{ margin: 'auto', maxWidth: '1320px' }}>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <div>
            <address className='text-white fs-6'>
              Address: 97 Man Thien, phuong Tang Nhon Phu A,<br/> Thanh Pho Thu Duc, Thanh Pho Ho Chi Minh
            </address>
            <a href="tel:0399942902" 
            className="mt-4 d-block mb-1 text-white">0399942902</a>
            <a href="mailto:miinyan2001@gmail.com" 
            className="mt-4 d-block mb-0 text-white">miinyan2001@gmail.com
            </a>
            <div className='social_icons d-flex align-items-center gap-30 mt-4'>
              <a className="text-white" href=""><BsLinkedin className='fs-4'/></a>
              <a className="text-white" href=""><BsGithub className='fs-4'/></a>
              <a className="text-white" href=""><BsYoutube className='fs-4'/></a>
              <a className="text-white" href=""><BsInstagram className='fs-4'/></a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-links d-flex flex-column'>
          <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
          <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
          <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
          <Link to="/term-and-conditions" className='text-white py-2 mb-1'>Term Of Services</Link>
        
        </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-links d-flex flex-column'>
          <Link className='text-white py-2 mb-1'>About Us</Link>
          <Link className='text-white py-2 mb-1'>Faq</Link>
          <Link className='text-white py-2 mb-1'>Contact</Link>
        </div>
        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
        <div className='footer-links d-flex flex-column'>
          <Link className='text-white py-2 mb-1'>Crochet Materials</Link>
          <Link className='text-white py-2 mb-1'>Knitting Materials</Link>
          <Link className='text-white py-2 mb-1'>Handmade Materials</Link>
          <Link className='text-white py-2 mb-1'>Yarn</Link>
        </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className='row'>
      <div className='col-12'>
        <p className='text-center mb-0 text-white'>
          &copy; {new Date().getFullYear()}; Powered by Zen</p>
      </div>
    </div>
  </footer>
    </>
}

export default Footer