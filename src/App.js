import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import {MainLayout} from "./loyouts";
import {EpisodePages} from "./pages/EpisodePages/EpisodePages";
import {CharactersPage} from "./pages/CharactersPage/CharactersPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>

<Route path={'/'} element={<MainLayout/>}>
<Route index element={<Navigate to={'episodes'}/>}/>
    <Route path={'episodes'} element={<EpisodePages/>}/>
    <Route path={'characters'} element={<CharactersPage/>}/>
    <Route path={'*'} element={<NotFoundPage/>}/>
    </Route>


    </Routes>

  );
}
export default App;
