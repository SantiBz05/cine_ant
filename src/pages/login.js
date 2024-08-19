import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, notification } from 'antd';
import '../css/Login.css';
import ticketBackground from '../img/tiket2.png';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Agrega la clase al body cuando el componente se monta
        document.body.classList.add('login-page-body');

        // Quita la clase al desmontar el componente
        return () => {
            document.body.classList.remove('login-page-body');
        };
    }, []);

    const toggleContent = () => {
        setIsSignUp(!isSignUp);
    };

    const validateLogin = () => {
        const nombre = document.getElementById('loginNombre').value;
        const password = document.getElementById('loginPassword').value;

        if (nombre === "" || password === "") {
            notification.error({
                message: 'Error',
                description: 'Todos los campos son obligatorios.',
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user =>
            user.nombre === nombre && user.password === password
        );

        if (user) {
            navigate('/'); // Redirige a la nueva página
        } else {
            notification.error({
                message: 'Error',
                description: 'Usuario o contraseña incorrectos.',
            });
        }
    };

    const validateSignUp = () => {
        const nombre = document.getElementById('signupNombre').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (nombre === "" || email === "" || password === "") {
            notification.error({
                message: 'Error',
                description: 'Todos los campos son obligatorios.',
            });
            return;
        }

        if (!validateEmail(email)) {
            notification.error({
                message: 'Error',
                description: 'Por favor, introduce un email válido.',
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { nombre, email, password };

        const userExists = users.some(user =>
            user.nombre === newUser.nombre && user.email === newUser.email
        );

        if (userExists) {
            notification.error({
                message: 'Error',
                description: 'Este usuario ya está registrado.',
            });
        } else {
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            notification.success({
                message: 'Success',
                description: 'Formulario de Sign up enviado correctamente.',
            });
            navigate("/"); // Redirige a la nueva página
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <div className="scene">
            <div className={`container-custom ${isSignUp ? 'rotate' : ''}`}>
                <div
                    className="content front-content"
                    style={{ backgroundImage: `url(${ticketBackground})` }}
                >
                    <div className="contenido">
                        <h2>Login</h2>
                        <Input
                            className="form-control form-control-custom w-60 mb-3"
                            placeholder="Nombre"
                            id="loginNombre"
                        />
                        <Input.Password
                            className="form-control form-control-custom w-60 mb-3"
                            placeholder="Contraseña"
                            id="loginPassword"
                            visibilityToggle={false} // Esto quita el icono de visibilidad
                        />
                        <label className="label">No tienes cuenta?</label>
                        <div className="buttons-container">
                            <Button
                                type="primary"
                                className="btn-custom"
                                onClick={validateLogin}
                            >
                                Ingresar
                            </Button>
                            <Button
                                type="default"
                                className="btn-custom"
                                onClick={toggleContent}
                            >
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    className="content back-content"
                    style={{ backgroundImage: `url(${ticketBackground})` }}
                >
                    <div className="contenido2">
                        <h2>Sign up</h2>
                        <Input
                            className="form-control form-control-custom w-60 mb-1"
                            placeholder="Nombre"
                            id="signupNombre"
                        />
                        <Input
                            className="form-control form-control-custom w-60 mb-1"
                            placeholder="Email"
                            id="signupEmail"
                        />
                        <Input.Password
                            className="form-control form-control-custom w-60 mb-1"
                            placeholder="Contraseña"
                            id="signupPassword"
                            visibilityToggle={false} // Esto quita el icono de visibilidad
                        />
                        <label className="label2">Tienes cuenta?</label>
                        <div className="buttons-container2">
                            <Button
                                type="primary"
                                className="btn-custom2"
                                onClick={validateSignUp}
                            >
                                Ingresar
                            </Button>
                            <Button
                                type="default"
                                className="btn-custom2"
                                onClick={toggleContent}
                            >
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
