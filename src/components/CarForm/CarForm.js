import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register,handleSubmit,reset}=useForm()
    const submit = (data) => {
      console.log(data)
    }
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type={"text"} {...register('model')}/></label></div>
            <div><label>Price: <input type={"text"}{...register('price', {valueAsNumber:true})}/></label></div>
            <div><label>Year: <input type={"text"}{...register('year', {valueAsNumber:true})}/></label></div>
<button>save</button>
        </form>
    );
};

export  {CarForm};