import {useState} from "react";
import './App.css';
import {CarForm, Cars} from "./components";




function App() {

    const [newCar,setNewCar] = useState(null)
  return (
    <div>
<CarForm setNewCar={setNewCar}/>
        <hr/>
        <Cars newCar={newCar}/>

    </div>
  );
}
export default App;
