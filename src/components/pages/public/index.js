import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import Home from "./home";
import Login from "./login";
import { Route } from "react-router-dom";
import Register from "./register";
import Recover from "./recover";
import Assinar from "./assinar";
import ProtectedRoute from "../../protectedRoute";

export default function Public() {
    return (
        <>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/recover/:token?" component={Recover} />
            <ProtectedRoute path="/assinar/:type?" component={Assinar} />
            <Footer />
        </>
    );
}
