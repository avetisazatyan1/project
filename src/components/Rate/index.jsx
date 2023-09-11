import "./style.css";
import { mockData } from "./data";
import { useState } from "react";

const Rate = () => {
    const [informationType, setInformationType] = useState(mockData[0].category);
    const [clickedType, setClickedType] = useState(mockData[0].name);
    const onTypeClick = (name) => {
        const a = mockData.find((data) => data.name === name);
        setInformationType(a.category);
        setClickedType(name);
    };

    return (
        <div className="app-section-rate">
            <div className="app-section-rate-container">
                <div className="app-section-rate-container1">
                    {mockData.map((data) => {
                        return (
                            <div
                                key={data.name}
                                className={
                                clickedType === data.name
                                    ? "app-section-rate-item-clicked"
                                    : "app-section-rate-item"
                                }
                                onClick={() => onTypeClick(data.name)}
                            >
                                <img
                                    src={`/assets/Icons/rate_${data.name}.svg`}
                                    alt="Forex"
                                    width={30}
                                    height={30}
                                />
                                <p>{data.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        {informationType.map((data) => {
                            return <th key={data.id}>{data.name}</th>;
                        })}
                        <th>Overall Costs</th>
                    </tr>
                </thead>

                <tbody>
                    {informationType.map((data) => {
                        return (
                            <tr key={data.id}>
                                {data.data.map((info) => {
                                    return <td key={info.id}>{info.title}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
  );
};

export default Rate;
