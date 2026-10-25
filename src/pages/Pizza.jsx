import { useContext } from "react"; // 1. Importamos useContext
import { Container, Card, Button } from "react-bootstrap";
import imgP001 from '../assets/img/p001.jpeg';
import { PizzaContext } from "../context/PizzaContext"; // 2. Importamos PizzaContext
import { CartContext } from "../context/CartContext"; // 3. Importamos CartContext

const Pizza = () => {
    // 4. Consumimos la pizza individual desde PizzaContext
    const { pizza } = useContext(PizzaContext);
    // 5. Consumimos agregarAlCarrito desde CartContext
    const { agregarAlCarrito } = useContext(CartContext);

    const imagenFinal = pizza.img && pizza.img.includes("firebasestorage")
        ? imgP001
        : pizza.img;

    return (
        <Container className="my-5 d-flex justify-content-center">
            {/* Validamos que la pizza tenga datos antes de renderizar */}
            {pizza.name ? (
                <Card className="tarjeta-pizza shadow-sm" style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={imagenFinal} style={{ height: '250px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title className="fw-bold">{pizza.name}</Card.Title>
                        <hr />
                        <Card.Text className="text-muted small" style={{ textAlign: 'justify' }}>
                            {pizza.desc}
                        </Card.Text>
                        <hr />
                        <div className="text-center">
                            <Card.Text className="fw-bold mb-1">Ingredientes:</Card.Text>
                            <Card.Text className="text-muted mb-3">
                                🍕 {pizza.ingredients && pizza.ingredients.join(', ')}
                            </Card.Text>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold mb-0">Precio: ${pizza.price}</h4>
                            <Button
                                variant="dark"
                                size="sm"
                                onClick={() => agregarAlCarrito({
                                    id: pizza.id,
                                    name: pizza.name,
                                    price: pizza.price,
                                    img: imagenFinal
                                })}
                            >
                                Añadir 🛒
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ) : (
                <p className="text-center">Cargando información de la pizza...</p>
            )}
        </Container>
    );
};

export default Pizza;