import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {id,name,username,email, address:{street, suite, city, zipcode,geo:{lat,lng}},phone,website} = user

    return (
        <div style={{margin:'20px'}}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <ul>address:
                <li>street: {street}</li>
                <li>suite: {suite}</li>
                <li>city: {city}</li>
                <li>zipcode: {zipcode}</li>
                <ul>
                    <li>lat: {lat}</li>
                    <li>lng: {lng}</li>
                </ul>
            </ul>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <Button to={'../../posts'} state={id}>get Posts</Button>
            {/*<Button to={'../posts'} state={id}>get Posts</Button>*/}
        </div>

    );
};

export {UserDetails};



