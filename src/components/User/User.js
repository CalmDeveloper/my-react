import  styles from './User.module.css'


export const User = ({user,getUserId}) => {
    const {id, name,}=user;





    return (
        <div className={styles.UserStyle}>
          <span>{id}</span><span>{name}</span>
            <button onClick={()=>getUserId(id)}>UserInfo</button>

        </div>
    );
};

