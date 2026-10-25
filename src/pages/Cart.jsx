import { useContext } from 'react'; // 1. Importamos useContext en lugar de useState
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'; // 2. Importamos CartContext

const Cart = () => {
    // 3. Consumimos el estado, las funciones y el total directamente desde CartContext
    const { cart, aumentarCantidad, disminuirCantidad, total } = useContext(CartContext);

    return (
        <Container className="my-5" style={{ maxWidth: '600px' }}>
            <h3 className="mb-4">Detalles del pedido:</h3>

            {/* Recorremos pizzaCart para mostrar cada producto */}
            {cart.map((item) => (
                <Row key={item.id} className="align-items-center mb-3 border-bottom pb-3">
                    <Col xs={2}>
                        <Image src={item.img} alt={item.name} fluid rounded style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={4}>
                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                    </Col>
                    <Col xs={3}>
                        <span className="text-muted">${(item.price * item.count).toLocaleString()}</span>
                    </Col>
                    <Col xs={3} className="d-flex align-items-center justify-content-between">
                        <Button variant="outline-danger" size="sm" onClick={() => disminuirCantidad(item.id)}>-</Button>
                        <span className="fw-bold px-2">{item.count}</span>
                        <Button variant="outline-primary" size="sm" onClick={() => aumentarCantidad(item.id)}>+</Button>
                    </Col>
                </Row>
            ))}

            <h3 className="mt-4 fw-bold">Total: ${total.toLocaleString()}</h3>
            <Button variant="dark" className="mt-3 w-100">Pagar</Button>
        </Container>
    );
};

export default Cart;