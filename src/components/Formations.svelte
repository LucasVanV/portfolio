<script>
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

    const formations = [
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

    let openProjects = {};

    function toggleProjects(index) {
        openProjects = {
            ...openProjects,
            [index]: !openProjects[index],
        };
    }
</script>

<section class="space-y-8 animate-fade-in">
    <div>
        <h2 class="text-4xl font-bold text-white mb-4">Formations</h2>
        <p class="text-slate-400">
            Mon parcours académique et les projets réalisés au cours de ma formation
        </p>
    </div>

    <div class="timeline space-y-8">
        {#each formations as formation, index}
            <div class="timeline-item relative flex gap-6">
                <div class="timeline-marker relative shrink-0 w-10 flex justify-center">
                    <div class="w-4 h-4 bg-accent rounded-full shadow-dot"></div>
                </div>

                <div class="pb-8 flex-1">
                    <div class="bg-secondary rounded-lg p-6 border border-slate-700">
                        <div class="mb-3">
                            <h3 class="text-2xl font-semibold text-accent">
                                {formation.degree}
                            </h3>
                            <p class="text-slate-400">{formation.institution}</p>
                            <p class="text-sm text-slate-500 mt-1">{formation.period}</p>
                        </div>

                        <p class="text-slate-300 mb-4">{formation.description}</p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each formation.skills as skill}
                                <span
                                    class="bg-slate-800 text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            {/each}
                        </div>

                        {#if formation.projects}
                            <button class="projects-toggle" on:click={() => toggleProjects(index)}>
                                Voir les projets
                                <span class:rotate={openProjects[index]}>▼</span>
                            </button>

                            {#if openProjects[index]}
                                <div class="projects-list">
                                    {#each formation.projects as project}
                                        <div class="project-item">
                                            <h4>{project.name}</h4>
                                            <p>{project.description}</p>

                                            <div class="tags">
                                                {#each project.tags as tag}
                                                    <span>{tag}</span>
                                                {/each}
                                            </div>

                                            {#if project.link !== "#"}
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="project-link"
                                                >
                                                    Voir le projet →
                                                </a>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                            {/if}
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    :global(.animate-fade-in) {
        animation: fadeIn 0.6s ease-out;
    }

    .timeline {
        position: relative;
    }

    .timeline::before {
        content: "";
        position: absolute;
        left: 19px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(to bottom, rgb(59 130 246), rgb(51 65 85));
        border-radius: 9999px;
    }

    .shadow-dot {
        box-shadow: 0 0 12px rgba(59, 130, 246, 0.45);
    }

    .projects-toggle {
        font-size: 0.9rem;
        color: rgb(59, 130, 246);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 10px;
    }

    .projects-toggle span {
        transition: transform 0.3s;
    }

    .projects-toggle span.rotate {
        transform: rotate(180deg);
    }

    .projects-list {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .project-item {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(71, 85, 105, 0.5);
        border-radius: 8px;
        padding: 12px;
    }

    .project-item:hover {
        border-color: rgb(59, 130, 246);
    }

    .project-item h4 {
        color: white;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .project-item p {
        color: #cbd5f5;
        font-size: 0.9rem;
        margin-bottom: 6px;
    }

    .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin-bottom: 6px;
    }

    .tags span {
        background: #1e293b;
        color: #93c5fd;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 0.75rem;
    }

    .project-link {
        font-size: 0.8rem;
        color: rgb(59, 130, 246);
    }

    .project-link:hover {
        opacity: 0.8;
    }
</style>
