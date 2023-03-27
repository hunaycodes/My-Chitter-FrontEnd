import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = async (e) => {
        e.preventDefault();
        const { username, email, password } = user;
        if (username && password && email) {
            const response = await axios.post(`${process.env.REACT_APP_CHITTERURL}/register`, user);
            alert(response.data.message)
            setUser({ email: ``, password: ``, username: `` });
            return
        }
        alert('Please fill in all fields')
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-center mb-4">Create a new chitter account</h3>
                    <p className="text-center">
                        Already have an account?&nbsp;<Link to="/login">Sign In</Link>
                    </p>
                    <form onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default SignUp;