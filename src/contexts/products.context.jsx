import { useState, createContext, useEffect } from "react";

import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.util.js";

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const value = { products };
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    );
}