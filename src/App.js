import users_UserInfo from'./App.module.css';
import {Posts, UserInfo, Users} from "./components";
import {useState} from "react";






function App() {
    const [user,setUser] =  useState(null)
    const [userId,setUserId]= useState(null)

  return (
    <div >
      <div className={users_UserInfo.father}>
        {<Users setUser={setUser} />}
          {user&& <UserInfo user={user} setUserId={setUserId}/>}
      </div>
        { userId&&<Posts userId={userId}/>}


    </div>
  );
}
export default App;
