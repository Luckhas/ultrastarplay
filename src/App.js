import React from "react";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Footer from "./components/footer";
import Download from './components/pages/download/index';
import Description from './components/pages/description/index';
import Subscribe from "./components/pages/payment";
import Contact from "./components/pages/contact";
import WhatsApp from "./components/components/whatsapp";

// my components

function App() {
    return (
        <>
            <WhatsApp/>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/produtos">
                        <h1>teste</h1>
                    </Route>
                    <Route path="/assinar/:type">
                        <Subscribe />
                    </Route>
                    <Route path="/download">
                        <Download />
                    </Route>
                    <Route path="/contato">
                        <Contact />
                    </Route>
                    <Route path="/assinar">
                        <Description />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
