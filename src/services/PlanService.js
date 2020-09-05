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
                price: 24.99,
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "Acesso", desc: "a 300+ canais" },
                    { feature: "60", desc: "Canais em 4k" },
                    { feature: "40", desc: "Canais adultos" },
                    { feature: "15.000+", desc: "Filmes & Séries" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "HOT App", desc: "Disponível" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
            },
            {
                name: "Redplay",
                displayName: "Redplay",
                type: "redplay",
                period: "A",
                price: 129.99,
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "Acesso", desc: "a 300+ canais" },
                    { feature: "60", desc: "Canais em 4k" },
                    { feature: "40", desc: "Canais adultos" },
                    { feature: "15.000+", desc: "Filmes & Séries" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "HOT App", desc: "Disponível" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
            },
            {
                name: "My Family Cinema",
                displayName: "My Family <br>Cinema",
                type: "mfamilycinemam",
                period: "M",
                price: 24.99,
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "Acesso", desc: "a 300+ canais" },
                    { feature: "60", desc: "Canais em 4k" },
                    { feature: "40", desc: "Canais adultos" },
                    { feature: "15.000+", desc: "Filmes & Séries" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "HOT App", desc: "Disponível" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
            },
            {
                name: "My Family Cinema",
                displayName: "My Family <br>Cinema",
                type: "mfamilycinema",
                period: "A",
                price: 129.99,
                details: [
                    { feature: "30", desc: "dias de acesso" },
                    { feature: "Acesso", desc: "a 300+ canais" },
                    { feature: "60", desc: "Canais em 4k" },
                    { feature: "40", desc: "Canais adultos" },
                    { feature: "15.000+", desc: "Filmes & Séries" },
                    { feature: "App", desc: "para celular Android" },
                    { feature: "HOT App", desc: "Disponível" },
                    { feature: "7 dias grátis", desc: "para novos usuários" }
                ],
            }
        ];
    }
}

export const planService = new PlanService();
