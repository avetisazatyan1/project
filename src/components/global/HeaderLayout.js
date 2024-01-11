import React from "react";

const HeaderLayout = ({title, description}) => {
    return (
        <div className="app-objective">
            <div className="app-objective-container">
                <div className="app-objective-title">
                    <p>{title}</p>
                </div>
                <div className="app-objective-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderLayout;
