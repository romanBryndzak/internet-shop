import React from 'react';
import {iProduct} from "../models";


const Commodity = ({products}: { products: Array<iProduct> }) => {

    return (
        <div className=" border py-2 px-2 rounded flex items-center flex-col mb-2">
            {products.map((product: iProduct) => {
                return (
                    <div
                        className=" border border-amber-800 py-2 px-2 rounded flex items-center flex-col mb-4 min-w-full"
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
                                    <div className="flex items-center flex-row ">
                                        <h4>Category:</h4><p className="text-xs ml-2">{product.category}.</p>
                                    </div>
                                </div>
                                <div className="flex items-center flex-row mx-3 my-2">

                                    <h4>Details:</h4><p className="text-xs ml-2">{product.description}.</p>
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
