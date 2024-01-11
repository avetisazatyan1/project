import { useState } from "react";
import StepTable from "../../components/StepTable";
import Button from "../../components/global/Button";
import "./style.css";
import HeaderLayout from "../../components/global/HeaderLayout";

const Objective = () => {
    const [clickedCurrencyBtn, setClickedCurrencyBtn] = useState("USD");
    const [clickedRiskBtn, setClickedRiskBtn] = useState("Normal");
    const [clickedBalanceBtn, setClickedBalanceBtn] = useState("$10,000");

    const onClickCurrencyBtn = (element) => {
        setClickedCurrencyBtn(element);
    }

    const onClickRiskBtn = (element) => {
        setClickedRiskBtn(element);
    }

    const onClickBalanceBtn = (element) => {
        setClickedBalanceBtn(element);
    }

    return (
        <>
            <HeaderLayout 
                title={'TRADING OBJECTIVES'} 
                description={'Lorem ipsum dolor sit amet consectetur. Nulla adipiscing feugiat et volutpat. Neque purus semper aenean velit. Facilisis hac eu ornare mattis malesuada mattis nam laoreet. Sed ullamcorper commodo amet mauris tortor adipiscing fusce consequat.'}
            />

            <div className="app-objective-group">
                <div className="app-objective-currency">
                    <div className="app-objective-currency-title">
                        <p>Currency: </p>
                    </div>

                    <div className="app-objective-risk-items">
                        {
                            ['USD', 'GBP', 'EUR', 'CZK', 'CAD', 'AUD', 'CHF']
                                .map(elem => 
                                    <Button 
                                        key={elem}
                                        className={clickedCurrencyBtn === elem ? '' : 'button-border'}
                                        title={elem} 
                                        iconSrc={`currency_${elem.toLocaleUpperCase()}.png`} 
                                        onClick={() => onClickCurrencyBtn(elem)}
                                    />
                                )
                        }
                    </div>
                </div>

                <div className="app-objective-risk">
                    <div className="app-objective-risk-title">
                        <p>Risk: </p>
                    </div>

                    <div className="app-objective-risk-items">                        
                        {
                            ['Normal', 'Aggressive']
                            .map(elem=>
                                <Button 
                                    key={elem}
                                    title={elem}
                                    className={clickedRiskBtn === elem ? '' : 'button-border'}
                                    onClick={() => onClickRiskBtn(elem)}
                                />     
                            )
                        }
                    </div>
                </div>

                <div className="app-objective-balance">
                    <div className="app-objective-balance-title">
                        <p>Balance:</p>
                    </div>                
                    
                    <div className="app-objective-risk-container">
                        <div className="app-objective-risk-items">
                            {
                                ['$10,000','$25,000','$50,000','$100,0000','$200,000']
                                .map(elem=>
                                    <Button 
                                        key={elem}
                                        title={elem}
                                        className={ clickedBalanceBtn === elem ? '' : 'button-border'}
                                        onClick={() => onClickBalanceBtn(elem)}
                                    />     
                                )
                            }                            
                        </div>
                        <Button title={'Quick comparison'}/>
                    </div>
                </div>
                <StepTable/>
            </div>
        </>
    );
}

export default Objective;
