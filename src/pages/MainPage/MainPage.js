import  {Outlet} from 'react-router-dom'
import {Header} from '../../components/'
import css from './MainPage.module.css'
import Background from '../../img/img.jpg';

const MainPage = () => {





    return (
<div className={css.style}>
MainPage
    <Header/>
    <Outlet/>
</div>
    );
};

export {MainPage};