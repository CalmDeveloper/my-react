import {MoviesListCard} from "../../components";
import  css from './moviesListPage.module.css'
import {Genres} from "../../components/Genres/Genres";

const MoviesListPage = () => {
    return (
        <div id={css.moviesListPage}>
<Genres/>
<MoviesListCard/>
        </div>
    );
};

export {MoviesListPage};