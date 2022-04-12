import  styles from './User.module.css'


export const User = ({user,setUser,getUserById}) => {
const {id,name} = user



    return (
        <div className={styles.UserStyle}>
          <span>{id}</span><span>{name}</span>
            <button onClick={()=>{
                setUser(user)
                getUserById(id)

            }}>UserInfo</button>

        </div>
    );
};

