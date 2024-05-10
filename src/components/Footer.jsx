import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   <img className=' h-12 w-fit' src="https://i.ibb.co/KznDM4Y/newsblog-logo.jpg" alt="" />
    <p>News Blog<br/>Providing reliable tech since 2024</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">News</a>
    <a className="link link-hover">Blog</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}
