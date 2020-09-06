import React from "react";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import Footer from "./components/footer";
import Subscribe from "./components/pages/payment";

// my components

function App() {
    return (
        <>
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
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
