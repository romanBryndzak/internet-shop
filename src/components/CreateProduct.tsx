import React from 'react';

const CreateProduct = () => {
    return (
        <form>
            <input type="text" className="border rounded-md py-2 px-4 pb-2 mt-4 mb-3 w-full outline-0"
                   placeholder="Please enter here..."/>
            <button type="submit"
                    className="py-2 px-4 rounded-md bg-yellow-300 hover:bg-yellow-100 hover:text-gray-400">Creat</button>
        </form>
    );
};

export default CreateProduct;