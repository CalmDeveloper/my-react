import {useReducer, useRef} from "react";

const App = () => {
    const reducer = (state, action) => {
        const {type, payload} = action;

        switch (type) {
            case 'addCat':
                return {...state, cats: [...state.cats, {name: payload, id: Math.random(Math.floor())}]}
            case 'delCat':
                return {
                    ...state, cats: state.cats.filter(cat => cat.id !== payload)
                }
            case 'addDog':
                return {...state, dogs: [...state.dogs, {name: payload, id: Math.random(Math.floor())}]}
            case 'delDog':
                return {
                    ...state, dogs: state.dogs.filter(dog => dog.id !== payload)
                }
            default: {
                console.error('Wrong type!!!')
                return state
            }

        }
    }
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});


    const catRef = useRef()
    const dogRef = useRef()
    const catCreator = () => {
        const catValue = catRef.current.value;
        dispatch({type: 'addCat', payload: catValue})
    }
    const dogCreator = () => {
        const dogValue = dogRef.current.value;
        dispatch({type: 'addDog', payload: dogValue})
    }


    return (
        <div style={{display:"flex", justifyContent:'space-between'}}>
            <div>
                <div>
                    <label>Cat name : <input type="text" ref={catRef}/></label>
                    <button onClick={catCreator}>save</button>
                </div>

                <div>
                    {state.cats && state.cats.map(cat => (<div key={cat.id}>{cat.name}
                        <button onClick={() => dispatch({type: 'delCat', payload: cat.id})}>delate</button>
                    </div>))}
                </div>
            </div>

            <div>
                <div>
                    <label>Dog name : <input type="text" ref={dogRef}/></label>
                    <button onClick={dogCreator}>save</button>
                </div>

                <div>
                    {state.dogs && state.dogs.map(dog => (<div key={dog.id}>{dog.name}
                        <button onClick={() => dispatch({type: 'delDog', payload: dog.id})}>delate</button>
                    </div>))}
                </div>
            </div>


        </div>
    );
};

export default App;