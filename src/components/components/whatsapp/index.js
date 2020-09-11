import React from 'react';

export default function WhatsApp() {
    return(
        <>
            <div id="whastsapp">
                <div>
                    <div className="whats-logo">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                </div>
                <div className="whats-numbers">
                    <div>
                        <p>Fale com algum dos nossos representantes!</p>
                    </div>
                    <div><a href="https://api.whatsapp.com/send?phone=5541996648546"><span>Heleno</span> +55 (41) 99664-8546</a></div>
                    <div><a href="https://api.whatsapp.com/send?phone=5541920017546"><span>Cristiano</span> +55 (41) 92001-7546</a></div>
                    <div><a href="https://api.whatsapp.com/send?phone=5541995057144"><span>Juliano</span> +55 (41) 99505-7144</a></div>
                </div>
            </div>
        </>
    )
}