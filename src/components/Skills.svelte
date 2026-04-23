<script>
    import { skills } from "../data/skills.js";

    function getTextFromLevel(level) {
        if (level === 3) return "Maîtrisé";
        if (level === 2) return "À l’aise";
        if (level === 1) return "En apprentissage";
        return "";
    }
</script>

<section class="space-y-8 animate-fade-in">
    <div>
        <h2 class="text-4xl font-bold text-white mb-4">Compétences</h2>
        <p class="text-slate-400">
            Mes compétences en développement logiciel, systèmes et embarqué.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {#each skills as skillGroup (skillGroup.category)}
            <div
                class="bg-secondary rounded-lg p-6 border border-slate-700 hover:border-accent transition-colors"
            >
                <h3 class="text-xl font-semibold text-accent mb-4">
                    {skillGroup.category}
                </h3>

                <div class="flex flex-col gap-2">
                    {#each skillGroup.items as skill (skill.label)}
                        <div class="skill-item">
                            <span class="skill-label">{skill.label}</span>

                            <span class={`badge level-${skill.level}`}>
                                {getTextFromLevel(skill.level)}
                            </span>
                        </div>
                    {/each}
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

    .skill-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        background: #1e293b;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 0.85rem;
    }

    .skill-label {
        color: rgb(226 232 240);
    }

    .badge {
        font-size: 0.7rem;
        padding: 2px 8px;
        border-radius: 999px;
        font-weight: 500;
        white-space: nowrap;
    }

    .level-3 {
        background: rgba(34, 197, 94, 0.15);
        color: rgb(34, 197, 94);
    }

    .level-2 {
        background: rgba(59, 130, 246, 0.15);
        color: rgb(59, 130, 246);
    }

    .level-1 {
        background: rgba(251, 191, 36, 0.15);
        color: rgb(251, 191, 36);
    }
</style>
