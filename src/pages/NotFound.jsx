import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h3>¡Oops! La página que buscas no existe.</h3>
      <p className="text-muted">La ruta a la que intentaste acceder no está disponible.</p>
      <Link to="/" className="btn btn-dark mt-3">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;