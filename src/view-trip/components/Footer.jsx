import React from 'react';

function Footer() {
  return (
    <footer className='w-full bg-gray-800 text-white py-6'>
      <div className='max-w-screen-xl mx-auto text-center px-4'>
        <h2 className='text-gray-400 mb-2'>
          Travel.ai - Created by Raghav Arora , Hardik Hasani , Mohd. Waseeq Zafar & Naman Tolasaria 
        </h2>
        <p className='text-gray-500 mb-4'>
          Your AI-powered travel companion for seamless journey planning!
        </p>

        {/* Social media icons */}
        <div className='flex justify-center space-x-4 mb-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>

        {/* Links and copyright */}
        <div className='text-gray-500'>
          <a href='/about' className='hover:text-white mx-2'>About Us</a> | 
          <a href='/contact' className='hover:text-white mx-2'>Contact</a> | 
          <a href='/privacy' className='hover:text-white mx-2'>Privacy Policy</a>
        </div>

        <p className='text-gray-500 mt-4'>&copy; {new Date().getFullYear()} Travel.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
