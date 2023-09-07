import "./style.css"

const Button = ({iconSrc, title, className, onClick}) => {
    return (
        <button 
            className={`button-default ${className && className}`}
            onClick={onClick}
        >
            <span className="button-span">
                {
                    iconSrc && (
                        <img 
                            src ={`/assets/Icons/${iconSrc }`}
                            alt={iconSrc}
                            width={54}
                            height={28}
                        />
                    )
                }
                {title}    
            </span>
        </button>      
    )
}


export default Button