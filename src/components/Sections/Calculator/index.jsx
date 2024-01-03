import "./style.css";
import toolnip from'../../toolnip.svg';
import React, { useState, useEffect } from 'react';

// calculatorConfig.js
const calculator_config = {
    types: {
      legacy: {
        range: {
          default: 100000,
          steps: [10000, 25000, 50000, 100000, 200000],
        },
        results: {
          steps_1: {
            profitShare: "Up to 95%",
            profitTarget: "8%",
            lossLimit: "3%",
            leverage: "Up to 30:1",
            maxTrailing: "5%",
            fee: {
              10000: "$110",
              25000: "$200",
              50000: "$350",
              100000: "$550",
              200000: "$1050",
            },
          },
          steps_2: {
            profitShare: "Up to 95%",
            profitTarget: "Step 1: 10%<br>Step 2: 5%",
            lossLimit: "5%",
            leverage: "Up to 30:1",
            maxTrailing: "10%",
            fee: {
              10000: "$110",
              25000: "$200",
              50000: "$350",
              100000: "$550",
              200000: "$1050",
            },
          },
        },
      },
      crypto: {
        range: {
          default: 25000,
          steps: [5000, 10000, 25000, 50000, 100000],
        },
        results: {
          steps_2: {
            profitShare: "Up to 95%",
            profitTarget: "Step 1: 10%<br>Step 2: 5%",
            lossLimit: "5%",
            leverage: "Up to 3:1",
            maxTrailing: "8%",
            fee: {
              5000: "$50",
              10000: "$100",
              25000: "$300",
              50000: "$450",
              100000: "$725",
            },
          },
        },
      },
    },
  };
  

  const Calculator = () => {
    const [selectedType, setSelectedType] = useState('legacy');
    const [selectedChallenge, setSelectedChallenge] = useState('steps_1');
    const [selectedAccountValue, setSelectedAccountValue] = useState(10000);
    const [calculatedResults, setCalculatedResults] = useState(null);
    const [isActive, setActive] = useState("false");
  
    useEffect(() => {
      // Initial calculation when the component mounts
      calculateResults();
    }, []); // Empty dependency array to run this effect only once on mount
  
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
      calculateResults();     
      document.getElementById('challenge_2').click();
      setActive(!isActive); 
    };
  
    const handleChallengeChange = (event) => {
      setSelectedChallenge(event.target.value);
      calculateResults();
    };
  
    const handleAccountValueChange = (event) => {
      setSelectedAccountValue(parseInt(event.target.value, 10));
      calculateResults();
    };
  
    const calculateResults = () => {
      const typeConfig = calculator_config.types[selectedType];
      const accountValueConfig = typeConfig.range.steps.find((value) => selectedAccountValue <= value);
  
      if (!typeConfig || !accountValueConfig) {
        // Handle the case where typeConfig or accountValueConfig is undefined
        return;
      }
  
      const results = typeConfig.results[selectedChallenge];
  
      if (!results) {
        // Handle the case where results is undefined
        return;
      }
  
      if (accountValueConfig) {
        // Adjusted fee access
        const fee = results.fee[selectedAccountValue] || results.fee.default;
  
        setCalculatedResults({
          profitShare: results.profitShare,
          profitTarget: results.profitTarget,
          lossLimit: results.lossLimit,
          leverage: results.leverage,
          maxTrailing: results.maxTrailing,
          fee: fee,
        });
      } else {
        setCalculatedResults(null);
      }
    };
  
  return (
    <section className="calculator-outer">
        <div className="container mt-5">
        <div className="calculator">
            <div className="calc-inner">
            {/* Step 1: Choose your market */}
            <div className="calc-item">
                <div className="calc-item-left">
                <div className="calc-item-details">
                    <span className="calc-item-number">1</span>
                    <div className="calculator-title">
                    Choose your Market
                    <div className="toolnip-btn">
                        <img src={toolnip} alt="toolnip" />
                        <span className="toolnip-content">
                        <p>Crypto and legacy evaluations are purchased separately.</p>
                        <p>You can have one of each at any time.</p>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="calc-item-right">
                <div className="switcher switcher--two">
                    <input
                    type="radio"
                    id="type1"
                    value="legacy"
                    name="radioButtonTest"
                    checked={selectedType === 'legacy'}
                    onChange={handleTypeChange}
                    />
                    <label htmlFor="type1">
                    <span >Legacy</span>
                    </label>
                    <input
                    type="radio"
                    id="type2"
                    value="crypto"
                    name="radioButtonTest"
                    checked={selectedType === 'crypto'}
                    onChange={handleTypeChange}
                    />
                    <label htmlFor="type2">
                    <span>Crypto</span>
                    </label>
                </div>
                </div>
            </div>

            {/* Step 2: Choose your evaluation */}
            <div className="calc-item">
                <div className="calc-item-left">
                <div className="calc-item-details">
                    <span className="calc-item-number">2</span>
                    <div className="calculator-title">
                    Choose your evaluation
                    <div className="toolnip-btn">
                        <img src={toolnip} alt="toolnip" />
                        <span className="toolnip-content">
                        <p>This determines the number of steps per evaluation.</p>
                        <p>Please note that the crypto evaluation is 2-step only.</p>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="calc-item-right">
                <div className="switcher switcher--two switcher--secondary">
                    <input
                    type="radio"
                    name="type2"
                    id="challenge_1"
                    value="steps_1"
                    checked={selectedChallenge === 'steps_1'}
                    onChange={handleChallengeChange}
                    
                    />
                    <label htmlFor="challenge_1"  className={`${isActive ? "" : "active"}`}>
                    <span>1-step evaluation</span>
                    </label>
                    <input
                    type="radio"
                    name="type2"
                    id="challenge_2"
                    value="steps_2"
                    checked={selectedChallenge === 'steps_2'}
                    onChange={handleChallengeChange}
                    />
                    <label htmlFor="challenge_2">
                    <span>2-step evaluation</span>
                    </label>
                    <div className="switcher__slider"></div>
                </div>
                </div>
            </div>

            {/* Step 3: Choose your account size */}
            <div className="calc-item">
                <div className="calc-item-left">
                <div className="calc-item-details">
                    <span className="calc-item-number">3</span>
                    <div className="calculator-title">
                    Choose your account size
                    <div className="toolnip-btn">
                        <img src={toolnip} alt="toolnip" />
                        <span className="toolnip-content">
                        <p>This determines your starting demo account balance.</p>
                        <p>This will also be your Breakout Account starting balance if you pass the evaluation.</p>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="calc-item-right">
                <div className="switcher switcher--five">
                    {calculator_config.types[selectedType].range.steps.map((value, index) => (
                    <React.Fragment key={index}>
                        <input
                        type="radio"
                        name="price-values"
                        id={`price_value_${index + 1}`}
                        value={value}
                        checked={selectedAccountValue === value}
                        onChange={handleAccountValueChange}
                        />
                        <label htmlFor={`price_value_${index + 1}`}>
                        <span>${value / 1000}k</span>
                        </label>
                    </React.Fragment>
                    ))}
                </div>
                </div>
            </div>

            {/* Calculator Info */}
            <div className="calculator_info">
                <div className="calculator__info-list">
                    <div className="calculator__info-item">
                        <div className="calculator__info-text">
                            Gain split
                            <div className="toolnip-btn">
                            <img src={toolnip} alt="toolnip" />
                            <span className="toolnip-content">
                                <p>Percentage of Breakout Account gains which are eligible for payouts. 80% default, 90% add-on, 95% via Scaling Plan.</p>
                            </span>
                            </div>
                        </div>
                        <div className="calculator__info-value">{calculatedResults?.profitShare}</div>
                    </div>
                    <div className="calculator__info-item profit">
                        <div className="calculator__info-text">
                            Account goal
                            <div className="toolnip-btn">
                            <img src={toolnip} alt="toolnip" />
                            <span className="toolnip-content">
                                <p>Required account increase to pass the Breakout Evaluation and receive a Breakout Account (eligible for payouts).</p>
                            </span>
                            </div>
                        </div>
                        <div className="calculator__info-value" dangerouslySetInnerHTML={{ __html: calculatedResults?.profitTarget }} />
                    </div>
                    <div className="calculator__info-item">
                        <div className="calculator__info-text">
                            Max. daily loss
                            <div className="toolnip-btn">
                            <img src={toolnip} alt="toolnip" />
                            <span className="toolnip-content">
                                <p>Daily loss limit is based on the prior day’s balance. This number resets every day (17:00 UTC for all crypto and legacy accounts). If your equity reaches or declines below the maximum daily loss, the account will be in breach (all positions closed, no new trades).</p>
                            </span>
                            </div>
                        </div>
                        <div className="calculator__info-value">{calculatedResults?.lossLimit}</div>
                    </div>
                    <div className="calculator__info-item">
                        <div className="calculator__info-text">
                            Leverage
                            <div className="toolnip-btn">
                            <img src={toolnip} alt="toolnip" />
                            <span className="toolnip-content">
                            <p>
                                Currencies: 30:1<br/>
                                Commodities: 20:1<br/>
                                Indices: 20:1<br/>
                                Crypto: 3:1
                            </p>
                            </span>
                            </div>
                        </div>
                        <div className="calculator__info-value">{calculatedResults?.leverage}</div>
                    </div>
                    <div className="calculator__info-item">
                        <div className="calculator__info-text">
                        Max. drawdown
                            <div className="toolnip-btn">
                            <img src={toolnip} alt="toolnip" />
                            <span className="toolnip-content">
                                <p>The maximum drawdown starts at the applicable % decline from your initial balance. It trails up based on realised gains. It does not trail above your starting balance. It does not trail down. If your equity (unrealised losses) reach or fall below the maximum drawdown, the account will breach.</p>
                            </span>
                            </div>
                        </div>
                        <div className="calculator__info-value">{calculatedResults?.maxTrailing}</div>
                    </div>
                    <div className="calculator__info-item">
                    <div className="calculator__info-text">
                        Refundable fee
                        <div className="toolnip-btn">
                        <img src={toolnip} alt="toolnip" />
                        <span className="toolnip-content">
                            <p>
                            Cost of taking the Breakout Evaluation. If you pass the evaluation and request a payout in your Breakout Account, the full cost of the evaluation will be added as a one-time bonus to your first payout (minimum 14 days after receiving the Breakout Account).
                            </p>
                        </span>
                        </div>
                    </div>
                    <div className="calculator__info-value" dangerouslySetInnerHTML={{ __html: calculatedResults?.fee }} />
                    </div>
                </div>
                <a href="#test" className="calculator__btn">
                    Buy now
                </a>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Calculator;
