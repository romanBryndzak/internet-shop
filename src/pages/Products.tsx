import React, {useState} from 'react';
import '../App.css';
import {useProducts} from "../hooks/useProducts";
import {ProductProperties} from "../models";
import Commodity from "../components/Commodity";


function Products() {
    const {products, loading, error, createProduct} = useProducts();
    const [openModalCreate, setModalCreate] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isPersonnel, setIsPersonnel] = useState(true);

    const handlerCreate = (product: ProductProperties) => {
        setModalCreate(false);
        createProduct(product);
        if (isCreate) {
            setIsCreate(false);
        }
    };
    const openCreateModal = () => {
        setModalCreate(true);
        setIsCreate(true);
        setIsPersonnel(true);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-12">
            {loading && <div className="flex justify-center mt-32">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>}
            {error && products.length === 0 &&
                <p className="text-center mt-32 font-sans text-2xl">{error}</p>}
            {!loading && products.length > 0 &&
                <Commodity products={products} setIsModal={setModalCreate} onCreate={handlerCreate} isCreate={isCreate}
                           openModalCreate={openModalCreate} setIsCreate={setIsCreate} isPersonnel={isPersonnel}/>
            }
            {!openModalCreate &&
                <button className="fixed bottom-7 right-10 ml-2 py-1 px-2 rounded-md bg-yellow-300 hover:bg-orange-200"
                        onClick={() => openCreateModal()}>Create
                </button>
            }
        </div>
    );
}

export default Products;
