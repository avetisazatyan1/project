import "./style.css"

const Container = ({color, title, description, about}) => {
    return (
        <div>
            <div className="container-title" style={{backgroundColor: `${color}`}}>
                {title}
            </div>

            <div className="container-description">
                <span>{description} </span>               
                <span>{about}</span>
            </div>
        </div>      
    )
}

 
export default Container