
const Car = ({car}) => {
const {id,model,price}=car
    return (
        <div>
            <hr/>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <hr/>
        </div>
    );
};

export {Car};