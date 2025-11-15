import React, {useState, useEffect} from 'react'
import './CountButton.css'

function CountButton(props) {
    

    const [currentCount, setCurrentCount] = useState(0)
    function handleClick(){
        setCurrentCount(currentCount+ props.incrementBy)
    }

    const divStyle = {
        color:"black",
       
        borderRadius:"10px",
    }

    const buttonStyles = {
        background: props.buttonColor,
        borderRadius: "10px"

    }

    useEffect(() =>{
        if(currentCount>10){
            setCurrentCount(0)}
        }, [currentCount])

    return <div>
        <div style={divStyle}>
        <button style={buttonStyles} onClick ={handleClick}>
            +{props.incrementBy}
            </button>
        <div className='count-display'> 
            {currentCount}
        </div>
        </div>
    </div>
}

export default CountButton