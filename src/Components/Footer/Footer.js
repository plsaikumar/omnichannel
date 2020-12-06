import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {


    return (
        <div className="footer-section pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
            <Link to="/">  <img className="footer_logo" alt="omnichannel" src="https://www.freelogodesign.org/file/app/client/thumb/3eb35850-1974-476d-b180-5c4104669bad_200x200.png?1607249103939" /></Link> 
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center d-flex flex-column justify-content-center">
                        <span className="footer_link_header">Quick Links</span>
                        <Link to="/" className="footer_link">Home</Link>
                        <Link to="/" className="footer_link">Products</Link>
                        <Link to="/" className="footer_link">ContactUs</Link>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center ">
                        <h1 className="footer-section-mail-id">
                        <p className="footer_link_header">Reach Us</p>

                            <i class="fa fa-envelope pr-1" aria-hidden="true"></i>
                            <a  className="footer_link" href="mailto:support@omnichannel.com">support@omnichannel.com</a>        
                        </h1>

                    </div>
                    </div>
                    <div className="row text-center pt-3">
                    <div className="col-12">
                        <p className="copyright"><i class="fa fa-copyright" aria-hidden="true"></i>2020 omnichannel</p>
                    </div>
                  </div>
            </div>
        </div>

    )

}

export default Footer;