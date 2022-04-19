import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import {MainLayout} from "./components/layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";
import {SingleUserPage} from "./pages/SingleUserPage/SingleUserPage";
import {PostPageForUser} from "./pages/PostsPageForUser/PostPageForUser";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostPageForUser/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
