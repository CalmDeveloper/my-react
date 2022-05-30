import './App.css';
import {MainLayout} from "./layouts/mainLayout/mainLayout";
import {Navigate,Route,Routes} from 'react-router-dom'
import {MoviesListPage} from "./pages/MoviesListPage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
  return (
   <Routes>
     <Route path={'/'} element={<MainLayout/>}>
       <Route index  element={<Navigate to={'movies'}/>}/>
         <Route path={'movies'} element={<MoviesListPage/>}/>

         <Route path={'*'} element={<NotFoundPage/>}/>
     </Route>
   </Routes>
  );
}
export default App;
