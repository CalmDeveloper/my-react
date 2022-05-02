import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import {MainLayout} from "./loyouts";
import {EpisodePages} from "./pages";
import {CharactersPage} from "./pages";
import {NotFoundPage} from "./pages";
import {LocationPage} from "./pages";

function App() {
  return (
    <Routes>

<Route path={'/'} element={<MainLayout/>}>
<Route index element={<Navigate to={'episodes'}/>}/>
    <Route path={'episodes'} element={<EpisodePages/>}/>
    <Route path={'location'} element={<LocationPage/>}/>
    <Route path={'characters'} element={<CharactersPage/>}/>
    <Route path={'*'} element={<NotFoundPage/>}/>
    </Route>


    </Routes>

  );
}
export default App;
