import React, {useState} from 'react';
import {iProduct} from "../models";


const Commodity = ({products}: { products: Array<iProduct> }) => {

    const [isDetails, setIsDetails] = useState(false);
    const [indexProduct, setIndexProduct] = useState(0);

    const onClickDetails = (e: any, ind: number) => {
        setIsDetails(prev => !prev);
        setIndexProduct(ind);
    };

    const classHied = "w-24 rounded-md bg-yellow-300";
    const classShow = "w-24 rounded-md bg-green-300";

    return (
        <div className="border py-2 px-2 rounded flex items-center flex-col mb-2">
            {products.map((product: iProduct, index) => {
                return (
                    <div
                        className="border border-amber-800 py-2 px-2 rounded flex items-center flex-col mb-4 min-w-full"
                        key={product.title}>
                        <div>{product.title}</div>
                        <div className="border py-2 px-2 rounded flex items-center flex-row m-3">
                            <img src={product.image} alt="product" className="max-h-32 w-24"/>
                            <div>
                                <div className="flex items-center space-x-72 flex-row mx-3 my-2">
                                    <div className="flex items-center flex-row">
                                        <h4>Price:</h4><p className="text-zinc-900 ml-2">{product.price}</p>
                                    </div>
                                    <div className="flex items-start flex-col">
                                        <p className="text-sm">rate: {product.rating.rate}%</p>
                                        <p className="text-sm">count: {product.rating.count}</p>
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
                                    {isDetails && indexProduct === index &&
                                        <p className="text-xs ml-2">{product.description}.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Commodity;
