import style from './UserInfo.module.css'
export const  UserInfo =  ({user}) => {



    return (
        <div className={style.UserInfoStyle}>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <button>GetPosts</button>
        </div>
    );
};



