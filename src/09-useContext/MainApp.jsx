import React from 'react'
import {
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />

            <hr />
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/about'
                    element={<AboutPage />}
                />
                <Route
                    path='/login'
                    element={<LoginPage />}
                />
                {/* Página de error, puede mandar a un componente definido, 404, o a cualquier otro 
                o puedes crear un navigate a otra ruta
                */}
                {/* <Route
                    path='/*'
                    element={<LoginPage />}
                /> */}

                <Route
                    path='/*'
                    element={
                        <Navigate to='about' />
                    }
                />

            </Routes>


        </UserProvider>
    )
}
