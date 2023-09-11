import Container from "../../components/global/Container";
import HeaderLayout from "../../components/global/HeaderLayout";
import PlanHighlights from "../../components/global/PlanHighlights";
import "./style.css";

const Plan = () => {
    return (
        <div className="app-plan" >
            <HeaderLayout 
                title={'SCALING PLAN'} 
                description={'Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.'}
            />

            <div className="app-plan-container">
                <div className="app-plan-container-types">
                    <Container color={"#0D53DB"} title={"Trading Objective"} description={"Maximum Daily Loss"} about={"Minimum Equity"}/>
                    <Container color={"#13BD57"} title={"Standart"} description={"5% Of the initial balance"} about={"10% Of the initial balance"}/>
                    <Container color={"#D60A0A"} title={"Aggressive"} description={"10% Of the initial balance"} about={"20% Of the initial balance"}/>
                </div>
            </div> 
            
            <div className="app-plan-highlights">
                <div className="app-plan-highlights-title">
                    <p>Scaling Plan Highlights</p>
                </div>
                <div className="app-plan-highlights-group">
                    <div className="app-plan-highlights-left">
                        <PlanHighlights title="Continuous increments if eligibility criteria are met"/> 
                        <PlanHighlights title="Trading Objectives remain static"/> 
                        <PlanHighlights title="Eligibility automatically checked with each Profit Split"/> 
                    </div>

                    <div className="app-plan-highlights-right">
                        <PlanHighlights title="Continuous increments if eligibility criteria are met"/> 
                        <PlanHighlights title="Trading Objectives remain static"/> 
                        <PlanHighlights title="Eligibility automatically checked with each Profit Split"/> 
                    </div>
                </div>
            </div>

            <div className="app-plan-description">
                <p>Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.</p>
            </div>            
        </div>
    );
}

export default Plan;
