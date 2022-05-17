//Layout base pricipal para implementar los elementos de la tienda como hijos
import React from 'react';
import Header from '../components/Header';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    );
}

export default Layout;

