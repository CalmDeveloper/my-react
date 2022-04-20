// import {createContext, useContext} from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import {AuthProvider} from "./hoc";

// export const myContext = createContext(null)
// const value= {name:'Taras'}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <myContext.Provider value={value}>

    <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </AuthProvider>
         // {/*</myContext.Provider>*/}
)

// const value = useContext(myContext) записуємо це в дочірніх компонентах і беремо значення
