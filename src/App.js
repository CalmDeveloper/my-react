import {Routes, Route, Navigate} from 'react-router-dom'


import {MainLayout} from "./layouts";
import {HomePage, NotFoundPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";

import './App.css';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
