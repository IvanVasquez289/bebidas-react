import { Row } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
import Bebida from "./Bebida"
const ListadoBebidas = () => {
  const {bebidas} = useBebidas()
  console.log(bebidas)
  return (
    <Row>
        {bebidas.map( bebida => (
            <Bebida 
                bebida={bebida}
                key={bebida.idDrink}
            />
        ))}
    </Row>
  )
}

export default ListadoBebidas