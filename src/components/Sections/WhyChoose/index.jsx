import "./style.css"; 

const WhyChoose = () =>{    
    return (
        <div className="app-section-why-choose">
        <div className="container">
                <div className="app-section-why-choose-title">
                    <h2>The Challenge</h2>
                    <p>Before you are allowed to trade with capital, we need to be sure that you can manage your trading risk. By meeting certain trading objectives in our Two-Step evaluation challenge, you prove that you are a disciplined and experienced trader.</p>
                </div>
                    <img 
                        className="app-section-why-choose-info"
                        src ="/assets/Images/why_choose_background.png"
                        alt="eng_lang"                            
                        // width={35}
                        // height={33}
                    />
                {/* <div className="app-section-why-choose-info">                                
                </div> */}
            </div>
        </div>
    )
}

export default WhyChoose;