import React, {useState} from 'react';
import {ProductProperties} from "../models";
import Modal from "./Modal";
import CreateProduct from "./CreateProduct";

interface CommodityProps {
    products: Array<ProductProperties>
    setIsModal: (b: boolean) => void
    onCreate: (payload: ProductProperties) => void
    isCreate: boolean
    openModalCreate: boolean
    isPersonnel: boolean
    setIsCreate: (b: boolean) => void
}

const Commodity = (
    {products, setIsModal, onCreate, isCreate, openModalCreate, isPersonnel, setIsCreate}
        : CommodityProps) => {

    const [isDetails, setIsDetails] = useState(false);
    const [indexProduct, setIndexProduct] = useState(0);
    const [idProduct, setIdProduct] = useState(-1);
    const [product, setProduct] = useState<any>();

    const onClickDetails = (e: any, ind: number) => {
        setIsDetails(prev => !prev);
        setIndexProduct(ind);
    };

    const openChange = (idItem: number, product: ProductProperties) => {
        setIsModal(true);
        setIdProduct(idItem);
        setProduct(product);
    }

    const classHied = "w-24 rounded-md bg-yellow-300";
    const classShow = "w-24 rounded-md bg-green-300";

    return (
        <div className="border py-2 px-2 rounded flex items-center flex-col mb-2">
            {products.map((product: ProductProperties, index) => {
                const rate = product.rating?.rate;
                const count = product.rating?.count;
                return (
                    <div
                        className="border border-amber-800 py-2 px-2 rounded flex items-center flex-col mb-4 min-w-full"
                        key={product.title}>
                        <div>{product.title}
                            {isPersonnel && <button className="ml-2 py-1 px-2 rounded-md bg-orange-300 hover:bg-orange-200"
                                    onClick={() => openChange(product.id, product)}>
                                editing
                            </button>}
                        </div>
                        <div className="border py-2 px-2 rounded flex items-center flex-row m-3">
                            <img src={product.image} alt="product" className="max-h-32 w-24"/>
                            <div>
                                <div className="flex items-center space-x-72 flex-row mx-3 my-2">
                                    <div className="flex items-center flex-row">
                                        <h4>Price:</h4><p className="text-zinc-900 ml-2">{product.price}</p>
                                    </div>
                                    <div className="flex items-start flex-col">
                                        <p className="text-sm">rate: {rate > 0 ? rate : 0}%</p>
                                        <p className="text-sm">count: {count > 0 ? count : 0}</p>
                                    </div>
                                </div>
                                <div className="flex items-center flex-row mx-3 my-2 justify-between">
                                    <div className="flex items-center flex-row">
                                        <h4>Category:</h4><p className="text-xs ml-2">{product.category}.</p>
                                    </div>
                                    <button className={isDetails && indexProduct === index ? classHied : classShow}
                                            onClick={(e) => onClickDetails(e, index)}>
                                        {isDetails && indexProduct === index ? "Hied Details" : "Show Details"}</button>
                                </div>
                                <div className="flex items-center flex-row mx-3 my-2">
                                    {isDetails && indexProduct === index && product?.description !== '' &&
                                        <p className="text-xs ml-2">{product?.description}.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            {openModalCreate &&
                <Modal setIsModal={setIsModal} setIsCreate={setIsCreate}
                       title={isCreate ? 'Create Product' : 'Editing Product'}>
                    <CreateProduct onCreate={onCreate} isCreate={isCreate} idProduct={idProduct} product={product}/>
                </Modal>}
        </div>
    );
};

export default Commodity;
