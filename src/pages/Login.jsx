import { useState } from "react";

const Login = () => {
    // 1. Definimos los estados para email y password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 2. Función que maneja el evento submit del login
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación 1: que ningún campo esté vacío
        if (email.trim() === '' || password.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validación 2: El password al menos debe tener 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        //Si todo es correcto
        alert('¡Login exitoso!');

        // Esto es opcional: limpiar los inputs
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>

                {/* Campo 1: email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Campo 2: password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;