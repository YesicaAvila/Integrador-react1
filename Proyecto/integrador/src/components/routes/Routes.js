import React from 'react';
import { Route, Routes as ReactDomRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Layout from '../Layout/Layout';
import Checkout from '../Checkout/Checkout';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoute';


const Routes = () => {
    return (
        <>
            <Layout>
                <ReactDomRoutes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route path='/checkout' 
                    element={
                        <ProtectedRoute redirectTo='/register'>
                            <Checkout />
                        </ProtectedRoute>
                        }
                    />

                    <Route path='*' element={<PageNotFound />} />
                </ReactDomRoutes>
            </Layout>
        </>
    );
}

export default Routes;