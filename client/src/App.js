import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/screens/Home";
import { Container } from "react-bootstrap";
import "./_app.scss";

export const App = () => {
    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => {
        toggleSidebar((value) => !value);
    };

    return (
        <main>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="main_container border border-info">
                <Sidebar sidebar={sidebar} />
                <Container
                    fluid
                    className="container_objects border border_warning"
                >
                    <Home />
                </Container>
            </div>
        </main>
    );
};

export default App;
