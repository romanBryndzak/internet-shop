import React, {useEffect, useState} from 'react';
import './App.css';
import Commodity from "./components/Commodity";


function App() {

    const [products, setData] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=20`)
            .then(res => res.json())
            .then((result) => {
                setData(result)
            })
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Commodity products={products}/>
        </div>
    );
}

export default App;
