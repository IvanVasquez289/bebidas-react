import axios from "axios";
import { createContext, useState, useEffect} from "react";

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)

    const handleClickModal = ()=>{
        setModal(!modal)
    }

    const handleBebidaId = id => {
        setBebidaId(id)
    }

    useEffect(() => {
        setCargando(true)
        const consultarBebida = async () => {
            if(!bebidaId) return 

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const {data} = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        consultarBebida()
    }, [bebidaId])
    

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
                consultarBebida,
                bebidas,
                modal,
                handleClickModal,
                handleBebidaId,
                receta,
                setReceta,
                cargando
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