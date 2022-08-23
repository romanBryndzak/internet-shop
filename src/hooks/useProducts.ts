import {useEffect, useState} from "react";
import {iProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setData] = useState<iProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function getProducts() {
        try {
            setError('');
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

    return {products, loading, error}
}
