import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { logout } = useContext(UserContext);

    return (
        <div className="container mt-5 text-center">
            <h2>Perfil de Usuario</h2>
            <p className="text-muted">Email: usuario@example.com</p>
            <button onClick={logout} className="btn btn-danger">
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Profile;