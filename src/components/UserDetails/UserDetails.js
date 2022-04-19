import Button from "../Button/Button";
import {useState} from "react";

const UserDetails = ({user}) => {
    const {
        id, name, username, email, address, phone, website, company,

    } = user

    return (
        <div>
            <ul><h3>User details:</h3>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li> email: {email}</li>
            <ul>address:
            <li>street: {address.street}</li>
            <li>suite: {address.suite}</li>
            <li>city: {address.city}</li>
            <li>zipcode: {address.zipcode}</li>
            <ul>Geo:
            <li>lat: {address.geo.lat}</li>
            <li>lng: {address.geo.lng}</li>
            </ul>
            </ul>
            <li>phone: {phone}</li>
            <li>website: {website}</li>
            <ul>company:
            <li>name: {company.name}</li>
            <li>catchPhrase: {company.catchPhrase}</li>
            <li>bs: {company.bs}</li>
            </ul>
            </ul>

            <Button to={`posts`} state={{id}}>Get Posts</Button>
        </div>
    );
};

export {UserDetails};


