//Inicio de sesión para usuario
import React from 'react';
import {useRef} from 'react';
import '../styles/Login.scss';

const Login = () => { 
    
    const form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data);
    }

    return(
        <div className="Login">
            <div className="Login-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <form action="/" className="form" ref={form}>
                    <label htmlform="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="email" className="input input-email"/>
                    <label htmlform="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password"/>
                    <button 
                        type="submit" 
                        value="Log in" 
                        className="primary-button login-button"
                        onClick={handleSubmit}>
                            Log In
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    );
 }

 export default Login;