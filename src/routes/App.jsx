import React from "react";
import '../styles/global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import NewPassword from "../pages/NewPassword";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import CheckOut from "../pages/Checkout";
import SendEmail from "../pages/SendEmail";
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                        <Route exact path="/send-email" element={<SendEmail />} />
                        <Route exact path="/new-password" element={<NewPassword />} />
                        <Route exact path="/account" element={<MyAccount />} />
                        <Route exact path="/sign-up" element={<CreateAccount />} />
                        <Route exact path='/checkout' element={<CheckOut/>} />
                        <Route exact path="orders" element={<Orders/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;