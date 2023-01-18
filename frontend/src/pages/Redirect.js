import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Redirect = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/" + id;
    axios
    .get(url)
    .then((response) => {
        window.location.replace(response.data.data.link)
    })
    .catch((error) => {
      console.log(error);
    });
 
}

