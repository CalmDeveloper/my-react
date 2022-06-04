import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux/slices/authSlice";
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
            <div className={style.border}>
                <h2>Login to The word of movies.</h2>
                <h3>Enter username</h3>
                <form onSubmit={handleSubmit(addLogin)}>
                    <div className={style.wraperInput}>
                        <input type="text" {...register('userName', {
                            onChange: true, required: true,
                            minLength: 2, maxLength: 20, valueAsNumber: false
                        })}
                               placeholder={'username'}/>
                        {errors.userName &&
                            <span style={{color: "red"}}>Only letters min 2 character maximum 20!</span>}
                        <button>Login</button>
                    </div>
                </form>
                <button onClick={displayNone} className={style.cancelButton}>Сancel</button>
            </div>
        </div>
    );
};

export {LoginForm};
