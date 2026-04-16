<script>
    const projectAlternance = [
        {
            name: "Système d’intervention et de diagnostic",
            description:
                "Logiciel de diagnostic et d’aide à l’intervention destiné aux équipes de maintenance ferroviaire, facilitant l’analyse des pannes et l’accompagnement opérationnel sur le terrain.",
            tags: ["Svelte", "Electron", "Analyse de données", "Ports de communication"],
        },
        {
            name: "ParamOdo",
            description:
                "Logiciel de paramétrage odométrique des trains, conçu pour configurer et fiabiliser les données liées aux systèmes de mesure embarqués.",
            tags: ["Svelte", "Electron", "Configuration", "Embarqué"],
        },
        {
            name: "Draisy TDD",
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

    const experiences = [
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
        <h2 class="text-4xl font-bold text-white mb-4">Expériences professionnelles</h2>
        <p class="text-slate-400">Mon parcours professionnel</p>
    </div>

    <div class="timeline space-y-8">
        {#each experiences as exp, index}
            <div class="timeline-item relative flex gap-6">
                <div class="timeline-marker relative shrink-0 w-10 flex justify-center">
                    <div class="w-4 h-4 bg-accent rounded-full shadow-dot"></div>
                </div>

                <div class="pb-8 flex-1">
                    <div class="bg-secondary rounded-lg p-6 border border-slate-700">
                        <div class="mb-3">
                            <h3 class="text-2xl font-semibold text-accent">{exp.role}</h3>
                            <p class="text-slate-400">{exp.company}</p>
                            <p class="text-sm text-slate-500 mt-1">{exp.period}</p>
                        </div>

                        <p class="text-slate-300 mb-4">{exp.description}</p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each exp.skills as skill}
                                <span
                                    class="bg-slate-800 text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            {/each}
                        </div>

                        {#if exp.projects}
                            <button class="projects-toggle" on:click={() => toggleProjects(index)}>
                                Voir les projets
                                <span class:rotate={openProjects[index]}>▼</span>
                            </button>

                            {#if openProjects[index]}
                                <div class="projects-list">
                                    {#each exp.projects as project}
                                        <div class="project-item">
                                            <h4>{project.name}</h4>
                                            <p>{project.description}</p>

                                            <div class="tags">
                                                {#each project.tags as tag}
                                                    <span>{tag}</span>
                                                {/each}
                                            </div>
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
    }

    .tags span {
        background: #1e293b;
        color: #93c5fd;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 0.75rem;
    }
</style>
