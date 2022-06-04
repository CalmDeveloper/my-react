import switcher from './styleSwitcher.module.css'
import {useState} from "react";

const StyleSwitcher = () => {
    const [isToggled, setIsToggled] = useState(false);






    const onToggle = () => {
        setIsToggled(!isToggled);
        if (isToggled){
            console.log('0')
            document.body.style.color = 'black'
            document.body.style.background = 'white'
        }else{
            console.log('1')
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