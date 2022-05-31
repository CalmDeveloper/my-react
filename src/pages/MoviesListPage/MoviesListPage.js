import {MoviesListCard} from "../../components";
import  css from './moviesListPage.module.css'

const MoviesListPage = () => {
    return (
        <div className={css.moviesListPage}>

            <MoviesListCard/>
        </div>
    );
};

export {MoviesListPage};