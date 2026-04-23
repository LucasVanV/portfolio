<script>
    import { personalProjects } from "../static/projects.js";
    function getStatusClass(status) {
        const s = status.toLowerCase();

        if (s.includes("terminé")) return "termine";
        if (s.includes("en cours")) return "en-cours";
        if (s.includes("prototype")) return "prototype";

        return "intermediaire";
    }
</script>

<section class="space-y-8 animate-fade-in">
    <div>
        <h2 class="text-4xl font-bold text-white mb-4">Projets personnels</h2>
        <p class="text-slate-400">Sélection de mes projets personnels récents</p>
    </div>

    <div class="space-y-6">
        {#each personalProjects as project (project.title)}
            <div
                class="project-card bg-secondary rounded-lg border border-slate-700 hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
                <div class="grid md:grid-cols-[1.4fr_1fr] items-stretch h-full">
                    <!-- CONTENU -->
                    <div class="p-6 flex flex-col justify-between h-full">
                        <div>
                            <div class="flex justify-between items-start mb-3 gap-4">
                                <div>
                                    <h3 class="text-2xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <p class="text-sm text-slate-500">{project.year}</p>
                                </div>

                                <span class={`status-badge ${getStatusClass(project.status)}`}>
                                    {project.status}
                                </span>
                            </div>

                            <p class="text-slate-300 mb-4">
                                {project.description}
                            </p>

                            <div class="flex flex-wrap gap-2 mb-4">
                                {#each project.tags as tag (tag)}
                                    <span
                                        class="bg-slate-800 text-blue-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        </div>

                        {#if project.link !== "#"}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-block bg-accent text-primary px-4 py-2 rounded font-semibold hover:bg-blue-400 transition-colors w-fit"
                            >
                                Voir le projet →
                            </a>
                        {/if}
                    </div>

                    <!-- IMAGE -->
                    <div class="image-wrapper hidden md:block">
                        <img
                            src={project.image}
                            alt={project.title}
                            class="project-image w-full h-full object-cover"
                            loading="lazy"
                        />
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

    .image-wrapper {
        position: relative;
        min-height: 260px;
        overflow: hidden;
    }

    .project-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transform: scale(1.05);
        transition:
            transform 0.5s ease,
            filter 0.5s ease;
        filter: brightness(0.72);
    }

    .project-card:hover .project-image {
        transform: scale(1.1);
        filter: brightness(0.95);
    }

    .image-wrapper::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        background: linear-gradient(
            to right,
            rgb(15 23 42) 0%,
            rgba(15, 23, 42, 0.96) 8%,
            rgba(15, 23, 42, 0.82) 16%,
            rgba(15, 23, 42, 0.55) 28%,
            rgba(15, 23, 42, 0.2) 42%,
            rgba(15, 23, 42, 0) 58%
        );
    }

    .image-wrapper::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        pointer-events: none;
        background: linear-gradient(to top, rgba(2, 6, 23, 0.45), rgba(2, 6, 23, 0.08));
    }

    .status-badge {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 999px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        white-space: nowrap;
    }

    .status-badge.termine {
        background-color: rgba(34, 197, 94, 0.15);
        color: rgb(34, 197, 94);
    }

    .status-badge.en-cours {
        background-color: rgba(59, 130, 246, 0.15);
        color: rgb(59, 130, 246);
    }

    .status-badge.prototype {
        background-color: rgba(234, 179, 8, 0.15);
        color: rgb(234, 179, 8);
    }

    .status-badge.intermediaire {
        background-color: rgba(251, 36, 219, 0.15);
        color: rgb(251, 36, 240);
    }
</style>
