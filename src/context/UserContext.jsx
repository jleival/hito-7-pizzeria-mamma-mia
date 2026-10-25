import { createContext, useState } from "react";

// 1. Creamos y exportamos el UserContext
export const UserContext = createContext();

// 2. Creamos el proveedor UserProvider
export const UserProvider = ({ children }) => {
    // Estado que almacena el token, por defecto en true
    const [token, setToken] = useState(true);

    // Método logout que cambia el estado del token a false
    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;