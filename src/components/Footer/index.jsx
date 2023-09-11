import "./style.css";
import Button from "../global/Button";

const Footer = () => {
    const date = new Date()
    const year = date.getUTCFullYear();
    
    return (
        <div className="app-footer">
            <div className="app-footer-title">
                Signup For Our Newsletter
            </div>
            <div className="app-footer-container">
                <div className="app-footer-menu-container">
                    <div className="app-footer-subscribe">
                        <input placeholder="Email Address"/>
                        <Button title={'SUBSCRIBE'} className={'button-subscribe'}/>
                    </div>
                    <div className="app-footer-menu">
                        <ul className="app-footer-menu-items">
                            <li> How it works </li>
                            <li> About Us </li>
                            <li> Contact </li>
                            <li> F.A.Q  </li>
                        </ul>

                        <ul className="app-footer-menu-items2">
                            <li> Address </li>
                            <li> Phone </li>
                        </ul>
                    </div>
                </div>

                <div className="app-footer-contact-with">
                    <div className="app-footer-contact-with-item">
                        <a href="https://www.instagram.com/tradewithcapital/" target="_blank" rel="noreferrer">
                            <img 
                                src ="/assets/Icons/contact_with_instagram.svg"
                                alt="logo"
                                width={39}
                                height={39}
                            />
                        </a>
                    </div>
                    <div className="app-footer-contact-with-item">
                        <a href="https://www.twitter.com/tradewcapital" target="_blank" rel="noreferrer">
                            <img 
                                src ="/assets/Icons/contact_with_twitter.svg"
                                alt="logo"
                                width={39}
                                height={39}
                            />
                        </a>
                    </div>
                    <div className="app-footer-contact-with-item" >
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

            <div className ="app-footer-container-year">
               Copyright {year}
            </div> 
        </div>
    )
}

export default Footer