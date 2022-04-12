import  styles from './User.module.css'


export const User = ({user,getUserId,getUser,setUserIdForPosts}) => {




    return (
        <div className={styles.UserStyle}>
          <span>{user.id}</span><span>{user.name}</span>
            <button onClick={()=>{
                getUser({user})
                getUserId(user.id)
                setUserIdForPosts(false);



            }}>UserInfo</button>

        </div>
    );
};

