import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoFooter from '../../static/logo/stratton-footer-logo.png'
import  Logo from '../../static/logo/logo.png'
import Newsletter from "./newsletter"


const Footer = ()=>{
    
    return(
        <>
            <footer className="footer-section">
                <div className="footer-container footer-grid">

                    <div className="footer-child footer-paragraph-info">
                        
                        <h1>
                            <img 
                                src={Logo}
                                alt="img-footer-logo"
                            />
                        </h1>

                        <p>
                            Molly McGinty loves to hear from readers. You can reach her via email. 
                            Feel free to send questions about writing, her works, interviews 
                            and other publicity matters.
                        </p> 
                        
                    <nav className="social-media-nav">
                        <ul>
                            <li>
                                <a 
                                    href="https://www.facebook.com/Molly-McGinty-102780441122831/"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <FontAwesomeIcon   
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a  
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://twitter.com/StrattonPress">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a      
                                    rel="noopener noreferrer"    
                                    target="_blank"
                                    href="https://www.instagram.com/strattonpress/">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>
                        
                            <li>
                                <a 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.goodreads.com/book/show/48203811-fun-run">
                                    <FontAwesomeIcon 
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>

                <div className="footer-child footer-nav">
                    <h5>Navigations</h5>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-the-author">About the Author</Link>
                            </li>
                            <li>
                                <Link to="/about-the-book">Books</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer-child" id="newsletter">
                        <h5>Newsletter</h5>
                        <p>Stay up to date with the latest from me</p>
                        <Newsletter/>
                    </div>
                </div>



            <div className="two-grid-column" id="lower-footer">
                <p>
                    <img alt="logo-developer" className="logo-developer" src={LogoFooter}/>
                     &#169; Copyright 2020. Stratton Press.
                </p>

                <ul className="two-grid-column" id="metalinks-footer">
                    <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>

                    <li>
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                </ul>
            </div>

            </footer>
        </>
    )
}

export default Footer;


