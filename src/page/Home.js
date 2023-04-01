import "../App.css";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

export const Home = () => {
    return (
        <div className="container">
            <NavBar />
            <ProductList />
        </div>
    )
}