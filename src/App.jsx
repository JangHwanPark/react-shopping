import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {TabProvider} from "./context/TabContext";

function App() {
    return (
        <AuthProvider>
            <div className="container">
                <TabProvider>
                    <Header/>
                    <Outlet/>
                </TabProvider>
            </div>
        </AuthProvider>
    );
}

export default App;