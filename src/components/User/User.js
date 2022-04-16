import {Button} from "../Button/Button";


const User = ({user}) => {
    const {id,name} = user

    return (
        <div style={{display:'flex', margin:'5px'}}>
            <div>{id}  {name}</div>
            <Button to={`${id}`} state={user}>get Details</Button>

        </div>

    );
};

export  {User};
