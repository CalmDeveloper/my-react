import {useState} from "react";
import './App.css';
import {CarForm, Cars} from "./components";




function App() {
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [newCar,setNewCar] = useState(null)
  return (
    <div>
<CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
        <hr/>
        <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>

    </div>
  );
}
export default App;
