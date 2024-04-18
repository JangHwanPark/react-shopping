import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {TabProvider} from "./context/TabContext";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <AuthProvider>
            <TabProvider>
                <Header/>
                <Outlet/>
            </TabProvider>
            <Footer/>
        </AuthProvider>
    );
}

export default App;