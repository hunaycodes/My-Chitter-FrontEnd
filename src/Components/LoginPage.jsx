import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser: setLoginUser }) => {

    const [user, setUser] = useState({
        username: ``,
        password: ``
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${process.env.REACT_APP_CHITTERURL}/login`, user);
        alert(res.data.message);
        console.dir(res.data.user);
        setLoginUser(res.data.user);
        setUser({ username: ``, password: `` });
        setLoggedIn(res.data.user ? true : false);
    }

    return (

        <div className="container">
            {loggedIn && <Navigate to="/" />}
            <h3 className="my-4">Log in to your chitter account</h3>
            <form onSubmit={login}>
                <div className="mb-3">
                    <input type="text" id="sign-in-username" name="username" value={user.username} onChange={handleChange} placeholder="Your username" />
                </div>
                <br />
                <div className="mb-3">
                    <input type="password" id="sign-in-password" name="password" value={user.password} onChange={handleChange} placeholder="Your password" />
                </div>
                <br />
                <input type="submit" value="Login" />
            </form>
            <p className="my-3">Don't have an account? <Link to="/register">Register now!</Link></p>
        </div>
    )
}

export default Login;