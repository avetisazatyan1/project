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
                            <li>
                                <span>How it works</span>
                            </li>
                            <li>
                                <span>About Us</span>                            
                            </li>
                            <li>
                                <span>Contact</span>                            
                            </li>
                            <li>
                                <span>F.A.Q</span>
                            </li>
                        </ul>

                        <div className="app-footer-menu-items">
                            Address
                        </div>

                        <div className="app-footer-menu-items">
                            Phone
                        </div>
                    </div>
                </div>

                <div className="app-footer-contact-with">
                    <div className="app-footer-contact-with-item">
                        <img 
                            src ="/assets/Icons/contact_with_instagram.svg"
                            alt="logo"
                            width={45}
                            height={45}
                        />
                    </div>
                    <div className="app-footer-contact-with-item">
                        <img 
                            src ="/assets/Icons/contact_with_linkedin.svg"
                            alt="logo"
                            width={45}
                            height={45}
                        />
                    </div>
                    <div className="app-footer-contact-with-item">
                        <img 
                            src ="/assets/Icons/contact_with_facebook.svg"
                            alt="logo"
                            width={45}
                            height={45}
                        />
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