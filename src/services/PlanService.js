class PlanService {
    getPlanByType(type) {
        return this.getPlans().find((plan) => plan.type == type);
    }

    getPlans() {
        return [
            {
                name: "Redplay",
                displayName: "Redplay",
                type: "redplaym",
                period: "M",
                price: 25.00,
                description: "Acesse +300 canais, 60 canais em 4k, 40 canais adultos. app para celular androide TV box, disponivel. 7 dias gratis para novos usuarios",
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "Acesso", desc: "a 300+ canais" },
                    { feature: "60", desc: "Canais em 4k" },
                    { feature: "40", desc: "Canais adultos" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "HOT App", desc: "Disponível" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
                payUrl: [
                    { 
                        mp: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=644745235-4758561d-8624-4c13-8db9-596c9555acd9",
                        pp: "https://picpay.me/heleno.venancio1/25.0"
                    }
                ],
            },
            {
                name: "Redplay",
                displayName: "Redplay",
                type: "redplay",
                period: "A",
                price: 150.00,
                description: "Acesse +300 canais, 60 canais em 4k, 40 canais adultos. app para celular androide TV box, disponivel. 7 dias gratis para novos usuarios",
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "Acesso", desc: "a 300+ canais" },
                    { feature: "60", desc: "Canais em 4k" },
                    { feature: "40", desc: "Canais adultos" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "HOT App", desc: "Disponível" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
                payUrl: [
                    { 
                        mp: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=644745235-2b13c04e-9e08-4ce4-aa84-589f0ced9bd1",
                        pp: "https://picpay.me/heleno.venancio1/150.0"
                    }
                ],
            },
            {
                name: "My Family Cinema",
                displayName: "My Family <br>Cinema",
                type: "mfamilycinemam",
                period: "M",
                price: 15.00,
                description: "Acesse mais de 600.000  filmes e series, aproveite uma plataforma multimidia em alta definição. App para celular Android e tv box, disponivel 7 dias gratis para novos usuarios",
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "15.000+", desc: "Filmes & Séries" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
                payUrl: [
                    { 
                        mp: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=644745235-298bc2ff-2892-40bf-bb8f-2248da7a448b",
                        pp: "https://picpay.me/heleno.venancio1/15.0"
                    }
                ],
            },
            {
                name: "My Family Cinema",
                displayName: "My Family <br>Cinema",
                type: "mfamilycinema",
                period: "A",
                price: 120.00,
                description: "Acesse mais de 600.000  filmes e series, aproveite uma plataforma multimidia em alta definição. App para celular Android e tv box, disponivel 7 dias gratis para novos usuarios",
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "15.000+", desc: "Filmes & Séries" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
                payUrl: [
                    { 
                        mp: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=644745235-dca42c8e-846a-461b-979f-eb793dfc3d8b",
                        pp: "https://picpay.me/heleno.venancio1/120.0"
                    }
                ],
            }
        ];
    }
}

export const planService = new PlanService();
