import React from "react";
const Footer = () => (
  <footer className='page-footer black'>
    <div className='container'>
      <div className='row'>
        <div className='col l6 s12'>
          <h5 className='white-text'>Company Bio</h5>
          <p className='grey-text text-lighten-4'>
            We are a team of college students working on this project like it's
            our full time job. Any amount would help support and continue
            development on this project and is greatly appreciated.
          </p>
        </div>
        <div className='col l3 s12'>
          <h5 className='white-text'>Links</h5>
          <ul>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                Home
              </a>
            </li>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                About
              </a>
            </li>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                Career
              </a>
            </li>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='col l3 s12'>
          <h5 className='white-text'>Connect</h5>
          <ul>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                Facebook
              </a>
            </li>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                Twitter
              </a>
            </li>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                Linkedin
              </a>
            </li>
            <li>
              <a className='white-text' href='http://asickweb.com/'>
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer-copyright'>
      <div className='container'>
        Made by{" "}
        <a
          className='orange-text text-lighten-3'
          href='http://www.asickweb.com'
          target='_blank'
          rel='noopener noreferrer'>
          www.asickweb.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
