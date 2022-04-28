import './App.css';
import {CarForm, Cars} from "./components";

function App() {
    return (
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <Cars/>
            <CarForm/>
        </div>
    );
}

export default App;
