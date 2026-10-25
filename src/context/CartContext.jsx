// 1. Importaciones necesarias
import { createContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";

// 2. Crear y exportar el Contexto
export const CartContext = createContext();

// 3. Crear el componente Proveedor (CartProvider)
export const CartProvider = ({ children }) => {
    // Estado del carrito
    const [cart, setCart] = useState(pizzaCart);

    // Funciones
    const disminuirCantidad = (id) => {
        setCart(
            cart
                .map(item =>
                    item.id === id
                        ? { ...item, count: item.count - 1 }
                        : item
                )
                .filter(item => item.count > 0)
        );
    };

    const aumentarCantidad = (id) => {
        setCart(
            cart.map(item =>
                item.id === id
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    };

    const total = cart.reduce(
        (acum, item) => acum + item.price * item.count,
        0
    );

    const agregarAlCarrito = (pizza) => {
        // 1. Buscamos si la pizza ya está en el carrito comparando sus IDs en minúscula
        const itemEncontrado = cart.find(
            (item) => item.id.toLowerCase() === pizza.id.toLowerCase()
        );

        // 2. Si ya existe, recorremos con map y sumamos 1 a su count
        if (itemEncontrado) {
            setCart(
                cart.map((item) =>
                    item.id.toLowerCase() === pizza.id.toLowerCase()
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );
        } else {
            // 3. Si no existe, la agregamos al arreglo inicializando su count en 1
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                agregarAlCarrito,
                aumentarCantidad,
                disminuirCantidad,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;