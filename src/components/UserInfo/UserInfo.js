import style from './UserInfo.module.css'
export const  UserInfo =  ({user, setUserId}) => {
    const {id, name, username, email, phone, website}=user


    return (
        <div className={style.UserInfoStyle}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={()=>{
               setUserId(id)

            }}>GetPosts</button>

        </div>
    );
};



