import EvaluationProcess from "../../global/EvaluationProcess";
import "./style.css"; 

const Evaluation = () =>{    
    return (
        <div className="app-section-evaluation">
            <div className="app-section-evaluation-title"> 
                <p>Evaluation Process</p>
            </div>

            <div className="app-section-evaluation-info"> 
                <EvaluationProcess title={'LOREM IPSUM'} description={'Lorem ipsum dolor sit amet consectetur. Accumsan eu sit feugiat diam aliquet. Et nec nec eleifend arcu sed. Dolor sit sed convallis et. Eget id hendrerit sed egestas sollicitudin.'}/>
                <EvaluationProcess title={'LOREM IPSUM'} description={'Lorem ipsum dolor sit amet consectetur. Accumsan eu sit feugiat diam aliquet. Et nec nec eleifend arcu sed. Dolor sit sed convallis et. Eget id hendrerit sed egestas sollicitudin.'}/>
                <EvaluationProcess title={'LOREM IPSUM'} description={'Lorem ipsum dolor sit amet consectetur. Accumsan eu sit feugiat diam aliquet. Et nec nec eleifend arcu sed. Dolor sit sed convallis et. Eget id hendrerit sed egestas sollicitudin.'}/>
            </div>
        </div>
    )
}

export default Evaluation;