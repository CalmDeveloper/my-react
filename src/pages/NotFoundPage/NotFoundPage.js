
import {notFoundPageImage} from '../../constants'
import css from './css.module.css'
const NotFoundPage = () => {
    return (
        <div className={css.notFoundPageImage}>
            <img src={notFoundPageImage} alt="Not found page!"/>
        </div>
    );
};

export {NotFoundPage};