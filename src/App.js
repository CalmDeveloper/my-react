import {Routes, Route, Navigate} from 'react-router-dom'


import {MainLayout} from "./layouts";
import {HomePage, NotFoundPage, UserDetailsPage, UsersPage} from "./pages";

import './App.css';




function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'users'}/>}/>
            <Route path={'users'} element={<UsersPage/>}>
                <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
