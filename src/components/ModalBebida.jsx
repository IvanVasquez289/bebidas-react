import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
const ModalBebida = () => {
  const {modal,handleClickModal, receta, cargando} = useBebidas()
  console.log(receta)

  const mostrarIngredientes = () => {
    let ingredientes = []
    for (let i = 1; i < 16; i++) {
        // console.log(receta.strIngredient[i])
        // esta es la manera de acceder a una propiedad del objeto sin que me de errores, de la forma de arriba no funciono
        if(receta[`strIngredient${i}`]){
            ingredientes.push(
                <li key={i}>{receta[`strIngredient${i}`]}:{receta[`strMeasure${i}`]}</li>
            )
        }
    }

    return ingredientes
  }
  return (
    !cargando && (
        <Modal
            show={modal}
            onHide={handleClickModal}
            
        >   
            <Image
                src={receta.strDrinkThumb}
                alt={`imagen de receta ${receta.strDrink}`}
            />

            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="">
                    <h2>Instrucciones</h2>
                    {receta.strInstructions}
                    <h2>Ingredientes y Cantidad</h2>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>

        </Modal>
    )
  )
}

export default ModalBebida