import React from "react";

const EvaluationProcess = ({title, description}) => {
    return (
        <div className="app-section-evaluation-grid-info">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default EvaluationProcess;
