import './App.css';
import {useReducer} from "react";

function App() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc':
                return {...state, count: state.count + 1}

            case 'dec':
                return {...state, count: state.count - 1}
            case 'reset':
                return {...state, count: action.payload}
            default:
                return state

        }
    }
        const [state, dispatch] = useReducer(reducer, {count: 0});
        return (
            <div>
                <div>count: {state.count}</div>
                <button onClick={() => dispatch({type: 'inc'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</button>
            </div>
        );
    }
    export default App;









