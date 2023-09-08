import Chart from "./Chart";
import Rate from "../Rate";
import Button from "../global/Button";
import Evaluation from "./Evaluation";
import About from "./About";
import WhyChoose from "./WhyChoose";

import "./style.css";
import SectionListInfo from "../global/SectionListInfo";

const Sections = () => {
    return (
        <div className="app-sections">
            <div className="app-section">
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
            <About/>

            <Evaluation/>
            <Chart/>            
            <Rate/>
            <WhyChoose/>
        </div>
    )
}


export default Sections