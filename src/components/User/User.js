import  "./user.css"
export const User = ({user}) => {

    return (
        <div className={user.id % 2 ? "gray" : "blue"}>
         <span>{user.id}</span>  <span>{user.name}</span> <span>{user.username}</span> <span>{user.email}</span>
        </div>
    );
};
