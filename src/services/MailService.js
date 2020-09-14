import { api } from './APIService';
import React from 'react';

function sendEmail(name, email, message) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post('/', {name, email, message});
            resolve(response);
            refreshState(response.data)
            document.getElementsByClassName("formResponse").innerHTML = refreshState(response.data);
        } catch (error) {
           reject(error); 
        }
    })
}

function refreshState(arg) {
    return (
        <h1>{arg}</h1>
    );
}

export default sendEmail;
