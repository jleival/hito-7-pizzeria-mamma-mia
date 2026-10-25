import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext"; // 3. Importamos CartContext

const Pizza = () => {
    // 1. Obtenemos el id de la URL con useParams
    const { id } = useParams();
    const [pizza, setPizza] = useState({});
    const { agregarAlCarrito } = useContext(CartContext);

    // 2. Realizamos la petición a la API con el id obtenido
    useEffect(() => {
        const obtenerPizza = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/api/pizzas/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.log("Error al cargar la pizza", error);
            }
        };
        obtenerPizza();
    }, [id]);

    const imagenFinal = pizza.img && pizza.img.includes("firebasestorage")
        ? `/img/${pizza.id}.jpeg`
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