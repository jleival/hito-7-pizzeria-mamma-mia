import { useContext } from 'react'; // 1. Importamos useContext
import { useState, useEffect } from 'react'; // Hito 4
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { PizzaContext } from '../context/PizzaContext'; // 2. Importamos PizzaContext
// import { pizzas } from '../data/pizzas'; // Importamos el arreglo de pizzas desde la carpeta data

const Home = () => {
    // 3. Consumimos el arreglo de pizzas desde PizzaContext
    const { pizzas } = useContext(PizzaContext);

    return (
        <div>
            <Header />
            <Container className="my-4">
                <Row className="g-4">
                    {pizzas.map((pizza) => (
                        <Col md={4} sm={6} xs={12} className="d-flex justify-content-center" key={pizza.id}>
                            <CardPizza
                                id={pizza.id}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                desc={pizza.desc}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;