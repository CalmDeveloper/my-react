import app from'./App.module.css';
import {UserInfo, Users} from "./components";






function App() {


  return (
    <div className={app.father}>
        {<Users/>}

    </div>
  );
}
export default App;
