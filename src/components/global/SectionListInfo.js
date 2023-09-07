import React from "react";

const SectionListInfo = ({title, info}) => {
    return (
        <div className="app-section-container-grid-info">
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    );
}

export default SectionListInfo
