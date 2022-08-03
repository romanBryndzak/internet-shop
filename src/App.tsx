import React, {useEffect, useState} from 'react';
import './App.css';
import Commodity from "./components/Commodity";
import axios, {AxiosError} from "axios";
import {iProduct} from "./models";


function App() {

    const [products, setData] = useState<iProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function getProducts() {
        setError('');
        try {
            setLoading(true);
            const response = await axios.get<iProduct[]>(`https://fakestoreapi.com/products?limit=10`);
            setData(response.data);
            setLoading(false);
        } catch (e: unknown) {
            setLoading(false);
            const error = e as AxiosError;
            setError(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <div className="flex justify-center mt-32">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>}
            {error && products.length === 0 &&
                <p className="text-center mt-32 font-sans text-2xl">{error}</p>}
            {!loading && products.length > 0 && <Commodity products={products}/>}

        </div>
    );
}

export default App;
