import {useEffect, useState} from "react";
import {ProductProperties} from "../models";
import axios, {AxiosError} from "axios";

export const api = "https://fakestoreapi.com/products"

export function useProducts() {
    const [products, setData] = useState<ProductProperties[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function createProduct(product: ProductProperties) {
        const Product = products.filter((i: ProductProperties) => i.id === product.id);

        if (Product.length > 0 && products.length > 0) {
            const index = products.indexOf(Product[0]);
            products.splice(index, index + 1, product);
            setData(products);
        } else {
            setData(prev => [...prev, product]);
        }
    }

    async function getProducts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<ProductProperties[]>(`${api}?limit=20`);
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

    return {products, loading, error, createProduct};
}