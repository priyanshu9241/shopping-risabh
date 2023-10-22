import React, { createContext } from "react";
import all_product from "../../assets/all_product"

export const ShopContext=createContext()

export default function ShopContextProvider({children}){
    const value=all_product;

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

