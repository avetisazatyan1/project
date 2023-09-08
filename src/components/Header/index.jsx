import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const Header = () => {
    const [langBtnClicked, setLangBtnClicked] = useState(false);

    const onClickLangBtn = () =>{  
        setLangBtnClicked(!langBtnClicked)
    }

 
    return (
        <div className="app-header">
            <div className="logo">
                <Link to='/'>
                    <img 
                        src ="/assets/Icons/logo.svg"
                        alt="logo"
                        width={110}
                        height={90}
                    />
                </Link>
            </div>

            <ul className="app-menu">
                <li>
                    <span>How it works</span>
                    <img
                        src ="/assets/Icons/down.svg"
                        alt="eng_lang"                            
                        width={11}
                        height={6}
                    />
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

            <div className="app-lang-container" >
                <div className='app-lang'>
                    <img 
                        src ="/assets/Icons/eng_lang.svg"
                        alt="eng_lang"                            
                        width={35}
                        height={33}
                    />
                    <div className="app-lang-icon" onClick={()=> onClickLangBtn()}>
                        <span className={`${langBtnClicked && 'opened-colored'}`}>EN</span>
                        <img 
                            src ="/assets/Icons/down.svg"
                            alt="drop_down"  
                            className={`${langBtnClicked && 'opend'}`}                      
                        />
                    </div>                    
                </div>
                <div className="app-search"> 
                    <input type="text" name="search" placeholder="Search" />
                    <img
                        src ="/assets/Icons/search.svg"
                        alt="search"
                        width={18}
                        height={19}
                    />
                </div>
            </div>
        </div>        
    )
}


export default Header