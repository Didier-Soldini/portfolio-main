import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <main >
                <div className="error">
                    <h1 className="error__title"><span className="error__title--404">Erreur: 404</span></h1>
                    <p  className="error__title--msg">La page que vous cherchez n'existe pas.</p>
                    <NavLink to="/" className="error__redirect">Retour à la page principale ?</NavLink>
                </div>
            </main>
        </>
    );
};

export default PageNotFound;