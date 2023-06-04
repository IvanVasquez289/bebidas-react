import { Form,Button,Row,Col} from "react-bootstrap"
const Formulario = () => {
  return (
    <Form>
        <Row>
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
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario