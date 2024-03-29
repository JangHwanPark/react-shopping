import './App.css';
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;