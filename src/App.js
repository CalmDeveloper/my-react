import users_UserInfo from'./App.module.css';
import {Posts, UserInfo, Users} from "./components";
import {useState} from "react";





function App() {
  const [user, setUser] = useState(null);

  const getUser = async ({user}) => {
    await setUser(user)
  }

    const [userIdForPosts, setUserIdForPosts] = useState(null);


  return (
    <div >
      <div className={users_UserInfo.father}>
        {<Users setUser={setUser} getUser={getUser} setUserIdForPosts={setUserIdForPosts} />}
        {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
      </div>
        {userIdForPosts && <Posts userId={userIdForPosts}/>}


    </div>
  );
}
export default App;
