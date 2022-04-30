const Episode = ({episode:{id, name, air_date, episode, characters}}) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
        </div>
    );
};

export {Episode};