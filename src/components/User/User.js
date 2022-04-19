import Button from "../Button/Button";


const User = ({user}) => {
   const {id,name} = user
    return (
        <div>
<span>{id}</span> <span>{name}</span>  <Button to={`${id}`} state={user}>get Detailes</Button>
        </div>
    );
};

export {User};