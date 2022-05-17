import React from 'react';
import {useEffect} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = React.useState([]);

    useEffect(async ()=>{
        getData();
    },[]);

    const getData = async ()=>{
        const response = await axios.get(API);
        setProducts(response.data);
        console.log(response);
    }

    return products;
}

export default useGetProducts;