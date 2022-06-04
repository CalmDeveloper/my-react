import {useState} from "react";

import switcher from './styleSwitcher.module.css'

const StyleSwitcher = () => {
    const [isToggled, setIsToggled] = useState(false);


    const onToggle = () => {
        setIsToggled(!isToggled);
        if (isToggled){
            document.body.style.color = 'black'
            document.body.style.background = 'white'
        }else{
            document.body.style.background = '#1c3248'
            document.body.style.color = 'white'
        }
    }

    return (

            <label className={switcher.toggleSwitch}>
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className={switcher.switch}/>
            </label>
    );
};

export {StyleSwitcher};