import './App.css';
import {CatForm} from "./components";
import {Cats} from "./components";
import {DogForm} from "./components/dogForm/dogForm";
import {Dogs} from "./components/dogs/dogs";



function App() {
    return (
<div style={{display:'flex', justifyContent:'space-between'}}>
    <div>
        <CatForm/>
        <Cats/>
    </div>
    <div>
        <DogForm/>
        <Dogs/>
    </div>



</div>

    );
}

export default App;
