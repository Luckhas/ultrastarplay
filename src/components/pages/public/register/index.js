import React, { useState } from "react";
import { userService } from "../../../../services/UserService";
import { useHistory } from "react-router-dom";


function Register() {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const controlInput = (name) => {
        return {
            value: data[name],
            onChange: (e) => handleChange(name, e.target.value),
        };
    };

    const history = useHistory();

    const handleChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);

        if(!data.name || !data.password || !data.email) {
            alert("Preecha todos os campos!");
            return;
        }

        await userService.create(data);
        history.push("/admin");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nome</label>
                <input type="text" className="form-control" {...controlInput("name")} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" {...controlInput("email")} />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" {...controlInput("password")} />
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
        </form>
    );
}

export default Register;
