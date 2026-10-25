import { useContext } from "react"; // 1. Importamos useContext
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // 1. Importamos Link
import { CartContext } from "../context/CartContext"; // Importamos CartContext

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
    // 3. Extraemos la función agregarAlCarrito desde el contexto
    const { agregarAlCarrito } = useContext(CartContext);
    const imagenFinal = img.includes("firebasestorage") ? `img/${id}.jpeg` : img;
    return (
        <Card className="tarjeta-pizza m-2 shadow-sm h-100">
            <Card.Img variant="top" src={imagenFinal} style={{ height: '200px', objectFit: 'cover' }} />

            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    {/* Título y ID */}
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="fw-bold mb-0">{name}</Card.Title>
                        {id && <small className="text-muted fw-semibold">{id}</small>}
                    </div>
                    <hr />

                    {/* Descripción de la pizza */}
                    {desc && (
                        <Card.Text className="text-muted small mb-3 text-justify" style={{ textAlign: 'justify', textAlignLast: 'justify' }}>
                            {desc}
                        </Card.Text>
                    )}

                    <hr />
                    {/* Contenedor de ingredientes */}
                    <div style={{ minHeight: '85px' }} className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Text className="text-muted text-center mb-1">
                            Ingredientes:
                        </Card.Text>
                        <ul className="list-unstyled text-center mb-0 d-flex flex-wrap justify-content-center gap-1">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {index === 0 ? '🍕 ' : ''}
                                    {ingredient}
                                    {index < ingredients.length - 1 ? ',' : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="mt-3" />
                </div>

                <div>
                    <div className="text-center mb-3">
                        <h5 className="fw-bold">Precio: ${price}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        {/* 2. Transformamos el botón Ver Más en un Link a la ruta requerida */}
                        <Link to="/pizza/p001" className="btn btn-outline-dark btn-sm">
                            Ver Más 👁️
                        </Link>
                        <Button
                            variant="dark"
                            size="sm"
                            onClick={() => agregarAlCarrito({ id, name, price, img: imagenFinal })}
                        >
                            Añadir 🛒
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;