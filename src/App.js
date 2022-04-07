import './App.css';
import {Users} from "./components/Users/Users";
import {Comments} from "./components/Comments/Comments";
import {Posts} from "./components/Posts/Posts";




function App() {
  return (
    <div>
        <div className={'users_posts'}>
            <Users/>
            <Posts/>
        </div>
        <Comments/>
    </div>
  );
}
export default App;
