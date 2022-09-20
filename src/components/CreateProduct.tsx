import React from 'react';
import {IdProduct} from "../models";
import axios from "axios";
import {api} from "../hooks/useProducts";

interface CreateProductProps {
    onCreate: (payload: IdProduct) => void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {

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
            const response = axios.post<IdProduct>(`${api}`, payload);
            response.then(res => onCreate(res.data))
        }
    }

   // const changeValue = (e: React.KeyboardEvent<HTMLInputElement>) => {}

    const renderInput = (type: string, placeholder: string, title: string, required: boolean, step?: string) => {
        return <input type={type} className="border rounded-md py-1 px-3 pb-1 mt-2 mb-2 w-full outline-0"
                      placeholder={placeholder}
                      name={title}
                      required={required}
                      step={step}
        />
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderInput("text", "Please enter here name...", 'title', true)}
            {renderInput("number", "Please enter here price...", 'price', true, "0.01")}
            {renderInput("text", "Please enter here description...", 'description', false)}
            {renderInput("text", "Please enter here category...", 'category', true)}
            {renderInput("text", "Please enter here image url...", 'image', true)}
            <button type="submit"
                    className="py-2 px-4 rounded-md bg-yellow-300 hover:bg-yellow-100 hover:text-gray-400">
                Creat
            </button>
        </form>
    );
};

export default CreateProduct;