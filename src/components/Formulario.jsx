import { Form,Button,Row,Col} from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"

const Formulario = () => {
  const {categorias} = useCategorias()
  return (
    <Form>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="bebida"> Nombre bebida:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc."
                        id="bebida"
                        name="bebida"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="categoria"> Nombre Categoria:</Form.Label>
                    <Form.Select
                        id="categoria"
                        name="cateoria"
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
                <Button variant="danger" className="text-uppercase w-100">
                    Buscar bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario