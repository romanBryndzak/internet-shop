import React, {useEffect, useState} from 'react';
import {ProductProperties} from "../models";
import axios from "axios";
import {api} from "../hooks/useProducts";

interface CreateProductProps {
    onCreate: (payload: ProductProperties) => void
    isCreate: boolean
    idProduct: number
    product: ProductProperties
}

const RenderInput = (
    isCreate: boolean, value: string | number, type: string, title: string,
    required: boolean, placeholder?: string, step?: string
) => {

    const [start, setValue] = useState<any>()

    useEffect(() => {
            setValue(value);
    }, [value]);

    return isCreate
        ? <input type={type} className="border rounded-md py-1 px-3 pb-1 mt-2 mb-2 w-full outline-0"
                 placeholder={`Please enter here ${title === 'description' ? title : placeholder} ...`}
                 name={title}
                 required={required}
                 step={step}
        />
        : <input type={type} className="border rounded-md py-1 px-3 pb-1 mt-2 mb-2 w-full outline-0"
                 placeholder={`Please enter here ${placeholder}`}
                 name={title}
                 required={required}
                 step={step}
                 value={start}
                 onChange={(e: React.KeyboardEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
}

const CreateProduct = ({onCreate, isCreate, idProduct, product}: CreateProductProps) => {


    const handleSubmit = (e: any) => {
        //React.FormEvent
        e.preventDefault();
        if (e.target.title.value.trim() !== '') {
            const payload = {
                title: e.target.title.value,
                price: e.target.price.value,
                description: e.target.description.value,
                image: e.target.image.value,
                category: e.target.category.value,
            }
            console.log(payload)
            if (isCreate) {
                const response = axios.post<ProductProperties>(`${api}`, payload);
                response.then(res => onCreate(res.data))
            } else {
                const response = axios.put<ProductProperties>(`${api}/${idProduct}`, payload);
                response.then(res => onCreate(res.data))
            }
        }
    }

    // const changeValue = (e: React.KeyboardEvent<HTMLInputElement>) => {}

    return (
        <form onSubmit={handleSubmit}>
            {RenderInput(isCreate, product?.title, "text",  'title', true,"name")}
            {RenderInput(isCreate, product?.price, "number", 'price', true, "price","0.01")}
            {RenderInput(isCreate, product?.description, "text", 'description', false)}
            {RenderInput(isCreate, product?.category, "text", 'category', true, "category")}
            {RenderInput(isCreate, product?.image, "text", 'image', true, "image url")}
            <button type="submit"
                    className="py-2 px-4 rounded-md bg-yellow-300 hover:bg-yellow-100 hover:text-gray-400">
                Creat
            </button>
        </form>
    );
};

export default CreateProduct;