import "./style.css";
import Button from "../../global/Button";

const ContactUs = () =>{    
    return (
        <div className="app-section-contact-us">
            <div className="app-section-contact-us-title">
                <p>Contact Us</p>
            </div>
            <div className="app-section-contact-us-container">
                <div className="app-section-contact-us-form">
                    <div className="app-section-contact-us-form-title">
                        <p>Contact Us</p>
                    </div>

                    <div className="app-section-contact-us-form-inputs">
                        <div className="app-section-contact-us-form-inputs-item">                                
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="text" name="email" placeholder="Your Email" />
                        </div>
                        <div className="app-section-contact-us-form-inputs-item">
                            <input type="text" name="phone" placeholder="Your Phone" />
                            <input type="text" name="company_name" placeholder="Company Name" />
                        </div>
                    </div>

                    <div className="app-section-contact-us-form-message">
                        <div className="app-section-contact-us-form-message-item">
                            <input type="text" name="message" placeholder="Write Your Message" />
                        </div>   
                        <div className="app-section-contact-us-form-btn">   
                            <Button title={'Send Message'}  className={"button-default button-send-message"}/>
                            </div>
                    </div>
                </div>

                <div className="app-section-contact-us-info">
                    <div className="app-section-contact-us-info-frame">
                        <div className="app-section-contact-us-info-logo">
                            <img 
                                src ="/assets/Icons/logo.svg"
                                alt="logo"
                                width={188}
                                height={154}
                            />
                        </div>

                        <div className="app-section-contact-us-info-contacts">
                            <div className="app-section-contact-us-info-contacts-phone">
                                PHONE:29194192419
                            </div>

                            <div className="app-section-contact-us-info-contacts-email">
                                EMAIL:TradeWithCapital@gmail.com
                            </div>

                            <div className="app-section-contact-us-info-contacts-address">
                                ADDRESS:M.Avenue
                            </div>
                        </div>
                            
                        <div className="app-section-contact-us-info-contacts-with">
                            <div className="app-section-contact-us-info-contacts-with-items">
                                <div className="app-section-contact-us-info-contacts-with-item">
                                    <a href="https://www.instagram.com/tradewithcapital/" target="_blank" rel="noreferrer">
                                        <img 
                                            src ="/assets/Icons/contact_with_instagram.svg"
                                            alt="logo"
                                            width={39}
                                            height={39}
                                        />
                                    </a>
                                </div>
                                <div className="app-section-contact-us-info-contacts-with-item">
                                    <a href="https://www.twitter.com/tradewcapital" target="_blank" rel="noreferrer">
                                        <img 
                                            src ="/assets/Icons/contact_with_twitter.svg"
                                            alt="logo"
                                            width={39}
                                            height={39}
                                        />
                                    </a>
                                </div>
                                <div className="app-section-contact-us-info-contacts-with-item">
                                    <a href="https://www.tiktok.com/@tradewithcapital" target="_blank" rel="noreferrer">
                                        <img 
                                            src ="/assets/Icons/contact_with_tiktok.svg"
                                            alt="logo"
                                            width={39}
                                            height={39}
                                        />
                                    </a>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;