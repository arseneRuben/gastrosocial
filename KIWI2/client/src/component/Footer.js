import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function App() {
  return (
    
    <footer bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FacebookIcon/>
          </a>
          <a href='' className='me-4 text-reset'>
            <TwitterIcon/>
          </a>
          <a href='' className='me-4 text-reset'>
            <AlternateEmailIcon/>
          </a>
          <a href='' className='me-4 text-reset'>
            <InstagramIcon/>
          </a>
          
        </div>
      </section>

      <section className=''>
        <div className='text-center container text-md-start mt-5'>
          <div className='row mt-3'>
            <div md="3" lg="4" xl="3" className='col-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                KIWI
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            <div md="2" lg="2" xl="2" className='col-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Recette
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Categories
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ingredients
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
            </div>

            <div md="3" lg="2" xl="2" className='col-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Menu
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div md="4" lg="3" xl="3" className='col-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <HomeIcon/> 
                Montreal, QC
              </p>
              <p>
                <EmailIcon/>
                KiwiInfo@gmail.com
              </p>
              <p>
                <LocalPhoneIcon /> + 01 234 567 88
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        
      </div>
    </footer>
  );
}