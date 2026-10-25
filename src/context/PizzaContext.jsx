import { createContext, useState, useEffect } from "react";

// 1. Creamos y exportamos el contexto de Pizzas
export const PizzaContext = createContext();

// 2. Creamos el proveedor PizzaProvider
export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [pizza, setPizza] = useState({});

    // Fetch de todas las pizzas (para Home)
    const consultarApi = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/pizzas`;
            const response = await fetch(url);
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.log("Error al cargar las pizzas", error);
        }
    };

    // Fetch de la pizza individual p001 (para Pizza)
    const obtenerPizza = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/pizzas/p001`;
            const response = await fetch(url);
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.log("Error al cargar la pizza", error);
        }
    };

    useEffect(() => {
        consultarApi();
        obtenerPizza();
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas, pizza }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;