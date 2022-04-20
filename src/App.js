import './App.css';
import {useReducer} from "react";

function App() {
   const reducer = (state,action) => {
       const {type,payload} = action;
       switch (type){
           case 'counter1':
               return {...state, count1: state.count1+payload
               }

           case 'counter2':
               return {...state, count2: state.count2+payload
               }
           case 'counter3':
               return {...state, count3: state.count3+payload
               }

           case 'reset1':
               return {...state,count1:0}
           case 'reset2':
               return {...state,count2:0}
           case 'reset3':
               return {...state,count3:0}

       }
     
   }
    
        const [state, dispatch] = useReducer(reducer, {count1: 0,count2:0,count3:0});
        return (
            <div>
                <div>
                    <div>count1: {state.count1}</div>
                    <button onClick={() => dispatch({type:'counter1', payload:1})}>inc</button>
                    <button onClick={() => dispatch({type:'counter1', payload:-1})}>dec</button>
                    <button onClick={() => dispatch({type:'reset1'})}>reset</button>
                </div>
                <div>
                    <div>count2: {state.count2}</div>
                    <button onClick={() => dispatch({type:'counter2', payload:1})}>inc</button>
                    <button onClick={() => dispatch({type:'counter2', payload:-1})}>dec</button>
                    <button onClick={() => dispatch({type:'reset2'})}>reset</button>
                </div>

                <div>
                    <div>count3: {state.count3}</div>
                    <button onClick={() => dispatch({type:'counter3', payload:1})}>inc</button>
                    <button onClick={() => dispatch({type:'counter3', payload:-1})}>dec</button>
                    <button onClick={() => dispatch({type:'reset3'})}>reset</button>
                </div>

            </div>
        );
    }
    export default App;




















//
// import './App.css';
// import {useReducer} from "react";
//
// function App() {
//     const reducer = (state, action) => {
//         switch (action.type) {
//             case 'inc':
//                 return {...state, count: state.count + 1}
//
//             case 'dec':
//                 return {...state, count: state.count - 1}
//             case 'reset':
//                 return {...state, count: action.payload}
//             default:
//                 return state
//
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, {count: 0});
//     return (
//         <div>
//             <div>count: {state.count}</div>
//             <button onClick={() => dispatch({type: 'inc'})}>inc</button>
//             <button onClick={() => dispatch({type: 'dec'})}>dec</button>
//             <button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</button>
//         </div>
//     );
// }
// export default App;
//
