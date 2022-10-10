import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from "./pages/Products";
import Another from "./pages/Another";
import BasicMenu from "./components/BasicMenu";

function App() {
    return (
        <>
            <div className="fixed h-[40px] w-[100%] flex justify-between items-center px-5 bg-orange-50 text-gray-700">
                <span className="font-bold">Internet shop</span>
                <BasicMenu/>
            </div>
            <Routes>
                <Route path={'/'} element={<Products/>}/>
                <Route path={'/another'} element={<Another/>}/>
            </Routes>
        </>
    )
}

export default App;
