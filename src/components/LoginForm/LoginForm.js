import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";

import style from "./login.module.css";


const LoginForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onTouched"
    });
    const dispatch = useDispatch()


    const addLogin = (userName) => {
        reset()
        dispatch(authActions.addUserName({userName}))
        dispatch(authActions.hideLoginForm())

    }
    const displayNone = () => {
        dispatch(authActions.hideLoginForm())
    }
    return (
        <div className={style.login}>
                <h2>Login to The word of movies.</h2>
                <h3>Enter username</h3>
                <form onSubmit={handleSubmit(addLogin)}>
                    <div className={style.wraperInput}>
                        <input type="text" {...register('userName',
                            {required: true, minLength: 2, maxLength: 20})} placeholder={'username'}/>

                        {errors.userName && <span style={{color: "red"}}>Enter the word 2-20 letters!</span>}
                        <button>Login</button>
                    </div>
                </form>
                <button onClick={displayNone} className={style.cancelButton}>Сancel</button>
        </div>
    );
};

export {LoginForm};
