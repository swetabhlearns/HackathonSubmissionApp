import { createContext, useEffect, useState } from "react";
import Data from "./data";


const DataContext = createContext()


export function DataProvider({ children }) {
    const [itemData, setItemData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [favData, setFavData] = useState([])
    const [details, setDetails] = useState([])
    const [allSubmission, setAllSubmission] = useState(true)
    const [favSubmission, setFavSubmission] = useState(false)
    const [fav, setFav] = useState(true)
    const favsData = filterData.filter((item) => item.favs === true)

    const handleAllClick = () => {
        setFavSubmission(false)
        setAllSubmission(true)
    }
    const handleFavClick = () => {
        setAllSubmission(false)
        setFavSubmission(true)
    }

    useEffect(() => {
        if (!itemData.length) {
            setItemData(Data)
        }
        if (!filterData.length) {
            setFilterData(Data)
        }

    }, [filterData])

    return (
        <DataContext.Provider value={{ favsData, fav, setFav, setItemData, itemData, setDetails, details, filterData, setFilterData, favData, setFavData, allSubmission, favSubmission, handleAllClick, handleFavClick }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContext