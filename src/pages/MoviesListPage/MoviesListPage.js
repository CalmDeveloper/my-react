import {MoviesListCard,Genres} from "../../components";

import  css from './moviesListPage.module.css'

const MoviesListPage = () => {
    return (
        <div id={css.moviesListPage}>
<Genres/>
<MoviesListCard/>
        </div>
    );
};

export {MoviesListPage};