import headerImg from '../assets/img/Header.jpg';

const Header = () => {
    return (
        <div
            className="text-white text-center py-5 mb-4"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '5rem',
                paddingBottom: '5rem'
            }}
        >
            <div className="container">
                <h1 className="fw-bold display-4">¡Pizzería Mamma Mía!</h1>
                <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
                <hr className="w-25 mx-auto border-light" />
            </div>
        </div>
    );
};

export default Header;