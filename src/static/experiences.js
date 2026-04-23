const projectAlternance = [
    {
        name: "Système d’intervention et de diagnostic",
        description:
            "Logiciel de diagnostic et d’aide à l’intervention destiné aux équipes de maintenance ferroviaire, facilitant l’analyse des pannes et l’accompagnement opérationnel sur le terrain.",
        tags: ["Svelte", "Electron", "Analyse de données", "Ports de communication"],
    },
    {
        name: "Paramétrage odométrique",
        description:
            "Logiciel de paramétrage odométrique des trains, conçu pour configurer et fiabiliser les données liées aux systèmes de mesure embarqués.",
        tags: ["Svelte", "Electron", "Configuration", "Embarqué"],
    },
    {
        name: "Draisy",
        description: "Interface conducteur développée pour les futurs trains Draisy.",
        tags: ["Svelte", "Electron", "Interface embarquée"],
    },
    {
        name: "Licence Matériel",
        description:
            "Logiciel de gestion des licences utilisé pour les outils de maintenance, intégrant des mécanismes de sécurisation et de contrôle d’accès.",
        tags: ["Svelte", "Electron", "Cryptographie", "Sécurité logicielle"],
    },
];

const projectStage = [
    {
        name: "Système d’intervention et de diagnostic",
        description:
            "Contribution au développement d’un logiciel de diagnostic et d’aide à l’intervention pour les équipes de maintenance ferroviaire.",
        tags: ["Svelte", "Electron", "Analyse de données", "Ports de communication"],
    },
];

const projectStageCH = [
    {
        name: "Outil de gestion interne",
        description:
            "Développement d’un outil permettant d’identifier, d’analyser et de corriger les comptes Windows sensibles au sein du centre hospitalier, afin d’améliorer la sécurité du système d’information.",
        tags: ["PHP", "PowerShell", "Sécurité", "Administration système"],
    },
];

export const experiences = [
    {
        role: "Alternance - Mastère Développement Fullstack",
        company:
            "SNCF Voyageurs - Cluster Ingénierie Nord Développement Informatique Embarquée",
        period: "2024 - Présent",
        description:
            "Développement et maintenance d’outils internes, amélioration de fonctionnalités existantes et résolution de problématiques techniques dans un environnement lié aux systèmes embarqués.",
        skills: ["Svelte", "Electron", "Travail en équipe", "Gestion de projet"],
        projects: projectAlternance,
    },
    {
        role: "Stage - BUT Informatique 3e année",
        company: "SNCF Voyageurs",
        period: "Mars 2024 - Juin 2024",
        description:
            "Stage de fin de BUT centré sur le développement d’applications internes et la découverte d’un environnement industriel lié au ferroviaire.",
        skills: ["Svelte", "Electron", "Travail en équipe", "Gestion de projet"],
        projects: projectStage,
    },
    {
        role: "Stage - BUT Informatique 2e année",
        company: "Centre Hospitalier Le Quesnoy",
        period: "Janv. 2023 - Mars 2023",
        description:
            "Développement d’outils internes pour améliorer la gestion des comptes et automatiser certaines opérations liées au système d’information.",
        skills: ["Développement", "Automatisation", "PHP", "PowerShell"],
        projects: projectStageCH,
    },
];