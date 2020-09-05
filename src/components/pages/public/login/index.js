import React, { useState } from "react";
import { userService } from "../../../../services/UserService";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const controlInput = (name) => {
        return {
            value: data[name],
            onChange: (e) => handleChange(name, e.target.value)
        };
    }

    const handleChange = (name, value) => {
        setData({...data, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await userService.login(data.email, data.password);
        if (!result) {
            return;
        }

        const afterAction = localStorage.getItem('afterAction');
        history.push(afterAction ?? '/');
        if (afterAction) {
            localStorage.removeItem('afterAction');
        } 
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" {...controlInput('email')} />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" {...controlInput('password')} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <Link to='/recover'>Esqueci minha senha!</Link>
        </form>
    );
}
