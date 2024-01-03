import React from "react";

const EvaluationProcess = ({phase, step, title, description, description2}) => {
    return (
        <div className="app-section-evaluation-grid-info">
            <div className="phaseText">{phase}</div>
            <div className="stepText">{step}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{description2}</p>
        </div>
    );
}

export default EvaluationProcess;
