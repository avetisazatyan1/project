import Chart from "./Chart";
import ContactUs from "./ContactUs";
import Rate from "../Rate";
import Button from "../global/Button";
import Evaluation from "./Evaluation";
import About from "./About";
import WhyChoose from "./WhyChoose";
import FirstInClass from "./FirstInClass";
import OurSpecifications from "./OurSpecifications";
import AccountPrices from "./AccountPrices";

import "./style.css";
import SectionListInfo from "../global/SectionListInfo";
import FaqSection from "./Faq";

const Sections = () => {
    return (
        <div className="app-sections">
            <div className="app-section">
            <div className="container">
                <div className="app-section-container">
                    <div className="app-section-container-title">
                        <h1>LOREM IPSUMLOREM</h1>
                        <p>Lorem ipsum dolarLorem ipsum dolar</p>
                    </div>

                    <div className="app-section-container-btn">
                        <Button title={'BUTTON'} />     
                        <Button title={'BUTTON'} className={'button-border'} />  
                    </div>  
                </div>

                <div style={{display: "flex", width: "100%"}}>
                    <div className="app-section-container-info">
                        <SectionListInfo title={'BID'} info={'303.129'}/>
                        <SectionListInfo title={'BID'} info={'300.129'}/>
                        <SectionListInfo title={'BID'} info={'310.129'}/>
                        <SectionListInfo title={'BID'} info={'389.129'}/>
                    </div>
                </div>
                </div>
            </div>
            <About/>

            <Evaluation/>
            <Chart/>
            <ContactUs/>         
            <Rate/>
            <WhyChoose/> 
            <AccountPrices/> 
            <OurSpecifications />
            <FaqSection/>
            <FirstInClass/>
        </div>
    )
}


export default Sections