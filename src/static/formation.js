export const formations = [
    {
        degree: "Mastère Expert en Développement Fullstack",
        institution: "Ynov Lille",
        period: "2024 - Présent",
        description:
            "Formation avancée en développement logiciel couvrant la conception d’applications web, les architectures backend, les pratiques DevOps et le développement fullstack en environnement professionnel.",
        skills: ["Fullstack", "Architecture logicielle", "DevOps", "Travail en équipe"],
        projects: ynovProject,
    },
    {
        degree: "BUT Informatique - Parcours Réalisation d’Applications",
        institution: "UPHF - Campus de Maubeuge",
        period: "2021 - 2024",
        description:
            "Formation axée sur le développement logiciel, la programmation orientée objet, les bases de données et la conception d’applications.",
        skills: [
            "C",
            "Bash",
            "Java",
            "SQL",
            "Développement web",
            "Économie",
            "Gestion de projet",
            "Communication",
            "Mathématiques",
        ],
        projects: butProject,
    },
    {
        degree: "Baccalauréat Général",
        institution: "Lycée Eugène Thomas - Le Quesnoy",
        period: "2018 - 2021",
        description: "Spécialités Mathématiques et Numérique & Sciences Informatiques (NSI).",
        skills: ["Algorithmique", "Mathématiques"],
    },
];

const ynovProject = [
    {
        name: "Dataterra",
        description:
            "Application web de visualisation de données communales issues de l’INSEE, conçue pour accompagner les élus municipaux dans l’analyse et la compréhension de leur territoire.",
        tags: ["JavaScript", "PostgreSQL", "Analyse de données"],
        link: "#",
    },
    {
        name: "Eco-Crush",
        description:
            "Jeu web inspiré de Candy Crush, conçu pour sensibiliser les plus jeunes à l’écologie à travers des mécaniques basées sur le tri des déchets.",
        tags: ["JavaScript", "Hackathon", "Gamification"],
        link: "https://lucasvanv.github.io/Eco-Crush/",
    },
    {
        name: "ParkMEL",
        description:
            "Application mobile de visualisation des parkings de la Métropole Européenne de Lille.",
        tags: ["Ionic", "Géolocalisation", "Hackathon", "API publique"],
        link: "#",
    },
    {
        name: "Michel Sort d'où",
        description:
            "Application de blind test interactive avec diffusion en temps réel et système de vote via application mobile.",
        tags: ["React Native", "API Spotify", "WebSockets"],
        link: "#",
    },
];

const butProject = [
    {
        name: "3DDY",
        description:
            "Développement d’un réseau social dédié au partage de modèles 3D, incluant la conception et l’intégration d’un robot en 3D.",
        tags: ["Android", "Spring", "3D"],
        link: "#",
    },
    {
        name: "Marly Moove",
        description:
            "Conception et développement d’un site web pour une association sportive, permettant la présentation des activités et la gestion des contenus.",
        tags: ["PHP", "PostgreSQL"],
        link: "#",
    },
    {
        name: "Robot Mineur",
        description:
            "Développement d’un jeu en Java mettant en scène des robots autonomes évoluant sur une grille pour collecter et acheminer des ressources vers des entrepôts.",
        tags: ["Java", "JavaFX"],
        link: "#",
    },
];