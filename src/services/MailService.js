import { api } from './APIService';
import React from 'react';

function sendEmail(name, email, message) {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post('/', {name, email, message});
            resolve(response);
        } catch (error) {
           reject(error); 
        }
    })
}

export default sendEmail;
