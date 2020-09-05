import { api, setToken } from "./APIService";

class UserService {
    user = null;
    logged = false;
    admin = false;

    async login(email, password) {
        try {
            const result = await api.post("/login", {
                email,
                password,
            });

            this.user = result.data.user;
            this.logged = true;
            setToken(result.data.token);

            return this.user;
        } catch (err) {
            alert("Usuario ou senha invalidos");
            return;
        }
    }

    getUser() {
        return this.user;
    }

    async getMe() {
        try {
            const result = await api.get("/user/me");

            this.user = result.data;
            this.logged = true;
            this.admin = !!result.data.usr_admin;

            return result.data;
        } catch (err) {
            return;
        }
    }

    isLogged() {
        return this.logged;
    }

    isAdmin() {
        return this.admin;
    }

    async create(data) {
        try {
            await api.post("/add", data);

            return this.login(data.email, data.password);
        } catch (e) {
            alert("Erro ao criar o usuários.")
        }
    }

    async verifyRecoverToken(token) {
        try {
            const result = await api.post("/verifyRecover", {
                token
            });

            return true;
        } catch (e) {
            return false;
        }
    }

    async recover(email) {
        try {
            const result = await api.post("/recover", {
                email
            });

            return result.data;
        } catch (e) {
            alert("Erro ao enviar o email para recuperar a senha.")
        }
    }
    
    async doRecover(token, password) {
        try {
            const result = await api.post("/doRecover", {
                token,
                password
            });

            return result.data;
        } catch (e) {
            alert("Erro ao recuperar a senha.")
        }
    }
}

export const userService = new UserService();
