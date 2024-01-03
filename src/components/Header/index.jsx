import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({    
    icon: {fill:"white !important"},
    text: {color:"white !important"},
    select:{'&:focus':{color:"red"}}
        
}));

const Header = () => {
    const [selectedLang, setSelectedLang] = useState("EN");


    const handleChange = (event) => {
        setSelectedLang(event.target.value);
    };   
   
    const classes = useStyles();

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className="app-header">
        <div className="container">
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

            <ul className={"app-menu " + (isMenuOpen ? 'open' : '')}>
                <li>
                    <div className="app-menu-dropdown" style={{display:"inline-block",position:"relative"}}>
                        <div className="app-menu-dropdown-drop" style={{}}>
                            <span>How it works</span>
                            <img
                                src ="/assets/Icons/arrow-down.png"
                                alt="eng_lang"                            
                                width={11}
                                height={6}
                            />
                        </div>
                        <div className="app-menu-dropdown-content">
                            <Link to='/'>Home</Link>
                            <Link to='/plan'>Plan</Link>
                            <Link to='/objectives'>Objectives</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <span>Evaluation</span>                            
                </li>
                <li>
                    <span>Instant Funding</span>                            
                </li>
                <li>
                    <span>Scaling Plan</span>                            
                </li>
                <li>
                    <span>F.A.Q</span>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
            <div className="mobile-menu-icon"  onClick={toggleMenu}>
            <img src ="/assets/Icons/menu.png" />
            </div>

            <div className="app-lang-container" >                
                <div className='app-lang' >
                    <FormControl className={classes.formControl} sx={{ border: 0}} variant="filled"  >
                        <Select className={classes.select}
                            sx={{backgroundColor:"inherit", borderBottom: 0}}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{
                                classes: {
                                    icon: classes.icon
                                },
                            }}
                            value={selectedLang}                            
                        >   
                            {
                                ["RU", "EU", "EN"].map(elem => 
                                    <MenuItem value={elem} key ={elem} >
                                        <img 
                                            key={elem}
                                            src ="/assets/Icons/eng_lang.svg"
                                            alt="eng_lang"                            
                                            width={35}
                                            height={33}
                                        />
                                        <span className={classes.text} >{elem}</span>
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
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
        </div>        
    )
}


export default Header