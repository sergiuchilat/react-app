import { Link } from "react-router-dom";

function render() {
    return (
        <nav>
            <Link color="primary" to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default render;