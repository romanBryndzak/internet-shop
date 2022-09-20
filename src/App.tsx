import React, {useEffect, useState} from 'react';
import './App.css';
import Commodity from "./components/Commodity";
import { useProducts} from "./hooks/useProducts";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {IdProduct} from "./models";

function App() {
    const {products, loading, error, createProduct} = useProducts();
    const [openModalCreate, setModalCreate] = useState(true);

    const handlerCreate = (product: IdProduct) => {
        setModalCreate(false);
        createProduct(product);
    };

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <div className="flex justify-center mt-32">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>}
            {error && products.length === 0 &&
                <p className="text-center mt-32 font-sans text-2xl">{error}</p>}
            {!loading && products.length > 0 && <Commodity products={products} setIsModal={setModalCreate}/>}
            {openModalCreate &&
                <Modal setIsModal={setModalCreate} title='Create Product'>
                    <CreateProduct onCreate={handlerCreate}/>
                </Modal>
            }
        </div>
    );
}

export default App;
