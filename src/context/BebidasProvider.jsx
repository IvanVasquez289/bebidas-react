import axios from "axios";
import { createContext, useState} from "react";

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] = useState([])
    const consultarBebida = async bebida =>{
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${bebida.nombre}&c=${bebida.categoria}`
            const {data} = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    } 

    return(
        <BebidasContext.Provider
            value={{
                consultarBebida
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext