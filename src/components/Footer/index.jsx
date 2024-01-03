import "./style.css";
import Button from "../global/Button";

const Footer = () => {
    const date = new Date()
    const year = date.getUTCFullYear();
    
    return (
        <div className="app-footer">
        <div className="container">
            {/*<div className="app-footer-title">
                Signup For Our Newsletter
            </div>*/}
            <div className="app-footer-container">
                <div className="app-footer-menu-container">
                    {/*<div className="app-footer-subscribe">
                        <input placeholder="Email Address"/>
                        <Button title={'SUBSCRIBE'} className={'button-subscribe'}/>
                    </div>*/}
                <div className="app-footer-logo"><img 
                                src ="/assets/Icons/logo.svg"
                                alt="logo"
                                width={150}
                                height={123}
                            /></div>
                    <div className="app-footer-menu">
                    <h4>Contact</h4>
                      <div className="app-footer-menu-inner">
                        <ul className="app-footer-menu-items">
                            <li>Contact Us</li>
                            <li>About Us</li>
                        </ul>
                        <ul className="app-footer-menu-items">
                            <li>Evaluation</li>
                            <li>Instant Funding</li>
                        </ul>
                      </div>

                    </div>
                </div>

                <div className="app-footer-contact-with">
                <h5>Social Links</h5>
                    <div className="app-footer-contact-with-item">
                        <a href="https://www.instagram.com/tradewithcapital/" target="_blank" rel="noreferrer">
                            <img 
                                src ="/assets/Icons/contact_with_instagram.svg"
                                alt="logo"
                                width={39}
                                height={39}
                            /> Instagram
                        </a>
                    </div>
                    <div className="app-footer-contact-with-item">
                        <a href="https://www.twitter.com/tradewcapital" target="_blank" rel="noreferrer">
                            <img 
                                src ="/assets/Icons/contact_with_twitter.svg"
                                alt="logo"
                                width={39}
                                height={39}
                            /> Twitter
                        </a>
                    </div>
                    <div className="app-footer-contact-with-item" >
                        <a href="https://www.tiktok.com/@tradewithcapital" target="_blank" rel="noreferrer">
                            <img 
                                src ="/assets/Icons/contact_with_tiktok.svg"
                                alt="logo"
                                width={39}
                                height={39}
                            /> Tiktok
                        </a>
                    </div>
                </div>
            </div>

            <div className ="app-footer-container-year">
               Copyright {year} Trade with Capital. All Right Reserved
            </div> 
            </div>
        </div>
    )
}

export default Footer