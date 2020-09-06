import React from "react";

export default function Contact() {
    return (
        <>
            <section className="container-fluid">
                <div className="container">
                    <h1>Tem alguma dúvida?</h1>
                    <p>Entre em contato usando algum dos meios abaixo!</p>

                    <div className="container-fluid">
                        <p><i class="far fa-envelope"></i> E-mail: contato@ultrastarplay.com</p>
                        <p>
                            <i className="fab fa-whatsapp"></i> WhatsApp: +55 (xx) 9 9111-1627
                        </p>

                        <div className="mt-5">
                            <h2>Formulário de Contato</h2>
                            <p>
                                <form>
                                    <div className="form-group">
                                        <label for="contactName">Seu nome</label>
                                        <input type="text" className="form-control" id="contactName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label for="contactMail">E-mail</label>
                                        <input type="email" className="form-control" id="contactMail" />
                                        <small id="emailHelp" className="form-text text-muted">
                                            Iremos enviar a resposta nesse e-mail.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label for="contactMessage">Mensagem</label>
                                        <textarea class="form-control" id="contactMessage" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
