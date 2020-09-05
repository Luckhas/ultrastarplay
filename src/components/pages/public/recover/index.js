import React, { useState, useEffect } from "react";
import { userService } from "../../../../services/UserService";
import { withRouter } from "react-router-dom";

function Recover(props) {
    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [validToken, setValidToken] = useState(true);

    const token = props.match.params.token;

    useEffect(async () => {
        const result = await userService.verifyRecoverToken(token);
        setValidToken(result);
    }, [token]);

    const controlInput = (name) => {
        return {
            value: data[name],
            onChange: (e) => handleChange(name, e.target.value),
        };
    };

    const handleChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const sendRecoverEmail = async (event) => {
        event.preventDefault();
        if (!data.email) {
            alert("Preecha todos os campos!");
            return;
        }

        const result = await userService.recover(data.email);
        if (!result) {
            return;
        }

        alert("Recuperação de senha enviada no email");
    };

    const doRecovery = async (event) => {
        event.preventDefault();
        if (!data.password || !data.confirmPassword) {
            alert("Preecha todos os campos!");
            return;
        }

        if (data.password != data.confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        const result = await userService.doRecover(token, data.password);
        if (!result) {
            return;
        }

        alert('Senha atualizada com sucesso');
    };

    return (
        <>
            {!validToken && !token && (
                <form onSubmit={sendRecoverEmail}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" {...controlInput("email")} />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            )}
            {validToken && token && (
                <form onSubmit={doRecovery}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nova senha</label>
                        <input type="password" className="form-control" {...controlInput("password")} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Confirmar nova senha</label>
                        <input type="password" className="form-control" {...controlInput("confirmPassword")} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            )}
            {!validToken && token && <h1>Seu token não é valido</h1>}
        </>
    );
}

export default withRouter(Recover);
