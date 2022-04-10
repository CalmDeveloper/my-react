import app from'./App.module.css';
import {UserInfo, Users} from "./components";
import {useState} from "react";




function App() {
  const [user, setUser] = useState(null);

  const getUser = async ({user}) => {
    await setUser(user)
  }
  return (
    <div className={app.father}>
        {<Users setUser={setUser} getUser={getUser}/>}
      {user && <UserInfo user={user}/>}
    </div>
  );
}
export default App;
