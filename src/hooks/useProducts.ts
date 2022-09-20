import {useEffect, useState} from "react";
import {IdProduct} from "../models";
import axios, {AxiosError} from "axios";

export const api = "https://fakestoreapi.com/products"

export function useProducts() {
    const [products, setData] = useState<IdProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function createProduct(product: IdProduct) {
        setData(prev => [...prev, product]);
    }

    async function getProducts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IdProduct[]>(`${api}?limit=20`);
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

    return {products, loading, error, createProduct}
}