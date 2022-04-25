import './App.css';
import {Route,Routes} from 'react-router-dom'
import {MainPage} from "./pages/MainPage/MainPage";

function App() {

  return (
<Routes>
    <Route index  path={'/'} element={<MainPage/>}>



        </Route>
</Routes>
  );
}
export default App;
