import './App.css';
import {createRef, useReducer, useRef} from "react";



function App() {


    const catInp = createRef()
    const reducer = (state,action) => {
        const {type,payload} = action
switch (type){
    case 'addCat':
        return {...state, cats:[...state.cats, {name:payload, id: Math.random(Math.round())}]}
    case 'delCat':
        return {...state, cats: [...state.cats.filter(cat =>cat.id !==payload )]}

}
    }
const [state,dispatch] = useReducer(reducer,{cats:[]})

  return (
    <div>
<div>
    <label>
        Cat:
        <input type="text" ref={catInp}/>
        <button onClick={()=>dispatch({type: 'addCat',payload:catInp.current.value})}>save</button>
    </label>
</div>

<div>
    {state.cats && state.cats.map(cat =>(<div key={cat.id}>
        {cat.name} <button onClick={()=> dispatch({type:'delCat',payload:cat.id})}>delate</button>
                                         </div>) ) }
</div>


    </div>
  );
}
export default App;
