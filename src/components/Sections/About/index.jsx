import "./style.css";

const About = () =>{    
    return (      
        <div className="app-section-about">
        <div className="container">
            <div className="app-section-about-info-title">
                <h2>Payout Made Simple for All Traders</h2>
            </div>

            <div className="app-section-about-info-main">
                <div className="app-section-about-info">
                    <div className="app-section-about-info-description">
                        <p>Get the most out of your efforts.</p>
                        <p>TWC offers payouts with the highest payouts percentage possible by any other funded prop firms in the industry.</p>
                        <p>Different types of payouts are offered to suit your needs and preferences, offering payouts through bank transfers, crypto and local payment methods across different regions and countries.</p>
                        <p>You can get paid more frequently with shorter wait times. There’s no need to wait for an entire month to get your profits.</p>
                        <p>You can also request payout on-demand, and all payouts get processed just after 14 days. Choose your own Profit Split Day to make sure that you will always receive your withdrawal on your most convenient day.</p>
                        <p>Why work with traditional brokerage services when you can get more, trading with capital?</p>
                    </div>
                </div>
                
                <div className="app-section-about-info-img">
                    <img
                        src ="/assets/Images/about.jpg"
                        alt="about"
                    />
                </div>
            </div>
        </div>
        </div>  
    )
}

export default About;