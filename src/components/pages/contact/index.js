import React, { useState} from "react";
import sendEmail from './../../../services/MailService';

export default function Contact() {
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [sendmail, setSendmail] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await sendEmail(name, email, message);

        if(result.data === 1) {
            setSendmail(
                <div className="alert alert-success" role="alert">
                    Sua mensagem foi enviada. Vamos responder seu contato o mais rápido possível.
                </div>
            );
        } else {
            setSendmail(
                <div className="alert alert-warning" role="alert">
                    Infelizmente houve um erro ao enviar sua mensagem. Tente novamente mais tarde ou entre em contato via algum outro canal.
                </div>
            );
        }
    }

    return (
        <>
            <section className="container-fluid">
                <div className="container">
                    <h1>Tem alguma dúvida?</h1>
                    <p>Entre em contato usando algum dos meios abaixo!</p>

                    <div className="container-fluid">
                        <p><i className="far fa-envelope"></i> E-mail: contato@ultrastarplay.com</p>
                        <p>
                            <a href="https://api.whatsapp.com/send?phone=5541996648546"><i className="fab fa-whatsapp"></i> Heleno WhatsApp: +55 (41) 9 9664-8546</a><br/>
                            <a href="https://api.whatsapp.com/send?phone=5541920017546"><i className="fab fa-whatsapp"></i> Cristiano WhatsApp: +55 (41) 9 2001-7546</a><br/>
                            <a href="https://api.whatsapp.com/send?phone=5541995057144"><i className="fab fa-whatsapp"></i> Juliano WhatsApp: +55 (41) 9 9505-7144</a><br/>
                        </p>

                        <div className="mt-5">
                            <h2>Formulário de Contato</h2>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="contactName">Seu nome</label>
                                        <input type="text" className="form-control" id="contactName" onChange={e => setName(e.target.value)} aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactMail">E-mail</label>
                                        <input type="email" className="form-control" id="contactMail" onChange={e => setEmail(e.target.value)} />
                                        <small id="emailHelp" className="form-text text-muted">
                                            Iremos enviar a resposta nesse e-mail.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactMessage">Mensagem</label>
                                        <textarea className="form-control" id="contactMessage" rows="5" onChange={e => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Enviar Mensagem
                                    </button>
                                </form>
                                <div className="formResponse pt-2">{sendmail}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
