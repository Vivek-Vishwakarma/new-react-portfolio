import React from 'react'
import "../css/button.css"
const Button = ({text,url,isDarkMode}) => {
    // let darkbtn = document.querySelectorAll(".button")
    // if (isDarkMode) {
    //     darkbtn.forEach(element => {
    //         element.style.background = "hsl(0deg 0% 40%)"
    //     });
    // }
    // else {
    //     darkbtn.forEach(element => {
    //         element.style.background = "black"
    //     });
    // }
    return (
        <>
            <div className="btn">
              <a href={url}><button className='button'>{text}</button></a>
            </div>
        </>
    )
}

export default Button
