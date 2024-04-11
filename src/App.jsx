import './App.css';
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import {AuthProvider} from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <div className="container">
                <Header/>
                <Outlet/>
            </div>
        </AuthProvider>
    );
}

export default App;