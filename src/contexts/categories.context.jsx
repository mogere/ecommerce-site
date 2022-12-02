
import { createContext, useState, useEffect } from "react"

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
    categoriesMap: {},
    // setProducts: ()=> {}
});


 export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategoryMap = async () =>{
        const categoryMap = await getCategoriesAndDocuments()
        setCategoriesMap(categoryMap);
        }
        getCategoryMap();

    }, [])
    const value = { categoriesMap }

    return (
        <CategoriesContext.Provider value={value}>
                { children }
        </CategoriesContext.Provider>
    )
}