import React, { useRef, useState } from 'react'
import './SwitchTheme'
const SwitchTheme = () => {
    const [count, setCount] = useState(0);
    //simple way
    // const [text,setText] = useState('Change Dark');
    const [isDark, setIsDark] = useState(false);
    const ref = useRef();
    const changeThemeHandler = () => {
        if (count >= 50) {
            alert("you have exceed ! please try again later")
        } else {
            if (isDark) {
                document.body.style.backgroundColor = "#fff";
                setIsDark(false);
                setCount(count + 1);
                ref.current.style.color = "#000"
                // setText('Change Dark')
            } else {
                document.body.style.backgroundColor = "#000";
                setIsDark(true);
                setCount(count + 1);
                ref.current.style.color = "#fff"
                // setText('Change White')
            }
        }
        console.log('Hello');

    }
    return (
        <>
            <div ref={ref}>
                <h5>You have click <span className='red'>{count}</span></h5>
                
            </div>
                
            <div>
                {/* conditional Rendering */}
                <button onClick={changeThemeHandler}>Change {isDark ? "White" : "Dark"}</button>

            </div></>
    )
}

export default SwitchTheme
//list ko map ml so yin key htae pay ya ml 