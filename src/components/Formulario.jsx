import { Form,Button,Row,Col,Alert} from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import { useState } from "react"

const Formulario = () => {
  const [busqueda,setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })

  const [alerta,setAlerta] = useState('')
  const {categorias} = useCategorias()

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')){
        setAlerta('Todos los campos son obligatorios')
        return
    }

    setAlerta('')
  }
  return (
    <Form onSubmit={handleSubmit}>
        {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="nombre"> Nombre bebida:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc."
                        id="nombre"
                        name="nombre"
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({...busqueda, [e.target.name]: e.target.value})}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="categoria"> Nombre Categoria:</Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria" 
                        value={busqueda.categoria}
                        onChange={e => setBusqueda({...busqueda, [e.target.name]: e.target.value})}
                    >
                        <option value="">--Selecciona Categoria</option>
                        {categorias.map(categoria => (
                            <option 
                                value={categoria.strCategory}
                                key={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className="justify-content-end">
            <Col md={3}>
                <Button variant="danger" className="text-uppercase w-100" type="submit">
                    Buscar bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario