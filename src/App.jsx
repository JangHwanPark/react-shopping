import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {TabProvider} from "./context/TabContext";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <AuthProvider>
            <div className="page_container">
                <TabProvider>
                    <Header/>
                    <Outlet/>
                </TabProvider>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;