import "./style.css";
import {mockData} from "./data"

const Rate = () => {
    return (
        <div className="app-section-rate">
            <div className="app-section-rate-container" >
                <div className="app-section-rate-container1" >
                    <div className="app-section-rate-item">
                        <img 
                            src ="/assets/Icons/rate_type_1.svg"
                            alt="Forex"
                            width={30}
                            height={30}
                        />
                        <p>Forex</p>
                    </div>

                    <div className="app-section-rate-item">
                    <img 
                        src ="/assets/Icons/rate_type_2.svg"
                        alt="Indices"
                        width={30}
                        height={30}
                    />
                    <p>Indices</p>
                    </div>

                    <div className="app-section-rate-item">
                        <img 
                            src ="/assets/Icons/rate_type_3.svg"
                            alt="Crypto"
                            width={30}
                            height={30}
                        />
                        <p>Crypto</p>
                    </div>
                
                    <div className="app-section-rate-item">
                        <img 
                            src ="/assets/Icons/rate_type_4.svg"
                            alt="Commodities"
                            width={30}
                            height={30}
                        />
                        <p>Commodities</p>
                    </div>

                    <div className="app-section-rate-item">
                        <img 
                            src ="/assets/Icons/rate_type_5.svg"
                            alt="Custom"
                            width={30}
                            height={30}
                        />
                        <p>Custom</p>
                    </div>
                    
                </div>
            </div>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        {mockData.map(data => {
                            return (
                                <th key={data.id}>{data.name}</th>
                            )
                        })}
                        <th>Overall Costs</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        mockData.map(data => {
                            return (
                                <tr key={data.id}>
                                    {
                                        data.data.map(info => {
                                            return (
                                                <td key={info.id}>{info.title}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div> 
    )
}


export default Rate