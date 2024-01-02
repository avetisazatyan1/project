import EvaluationProcess from "../../global/EvaluationProcess";
import "./style.css"; 

const Evaluation = () =>{    
    return (
        <div className="app-section-evaluation">
        <div className="container">
            <div className="app-section-evaluation-title"> 
                <h2>Our program is designed to find consistently profitable traders and give them the opportunity to Trade with Capital.</h2>
                <p>To start trading with more capital, it is a journey that consists of three crucial steps:</p>
            </div>

            <div className="app-section-evaluation-info"> 
                <EvaluationProcess phase="Evaluation Phase" step="Step-1" title={'Challenge'} description={'Register and set up your trading account with TradeWithCapital.'} description2={'In this initial phase, traders are challenged to demonstrate their trading prowess. The goal is to prove your ability to manage risk while generating consistent returns.'}/>
                <EvaluationProcess phase="Evaluation Phase" step="Step-2" title={'Verification'} description={'Upon successful completion of Step 1, you will enter the verification stage.'} description2={'In Step 2, we validate your trading skills to ensure they are sustainable over time. This phase is essential to demonstrate your consistency as a trader.'}/>
                <EvaluationProcess phase="Funded Phase" step="Step-3" title={'Funded Trader'} description={"Congratulations! You've proven your trading skills, and now you're ready for the next level."} description2={'Once you are a Funded Trader with us, you will be entitled to a large majority of the profits you make. You will also be given the opportunity for increased capital allocation with our Scaling Plan as you continue to succeed.'}/>
            </div>
            <div className="app-section-text">Your journey to trading with capital starts with a challenge, but it leads to exciting possibilities as a Funded Trader. Begin your journey today and unleash the full potential of your trading abilities.</div>
            </div>
        </div>
    )
}

export default Evaluation;