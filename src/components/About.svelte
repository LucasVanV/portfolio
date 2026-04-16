<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<section class="space-y-10 animate-fade-in">
    <div class="hero grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <div class="space-y-6">
            <div class="space-y-4">
                <p class="text-accent font-medium tracking-wide uppercase text-sm">
                    Développeur fullstack · systèmes embarqués · software & hardware
                </p>

                <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Bonjour, moi c’est <span class="text-accent">Lucas</span>
                </h1>

                <p class="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Je développe des applications logicielles et j’explore l’univers des systèmes
                    embarqués à travers des projets concrets mêlant code, électronique et usage
                    terrain.
                </p>

                <p class="text-slate-400 max-w-2xl">
                    Actuellement en Mastère Développement Fullstack et en alternance à la SNCF
                    Voyageurs, je construis un profil hybride entre développement logiciel, outils
                    métiers et projets orientés hardware.
                </p>
            </div>

            <div class="flex flex-wrap gap-4">
                <button
                    class="cta-primary"
                    on:click={() => dispatch("navigate", { section: "projects" })}
                >
                    Voir mes projets
                </button>

                <button
                    class="cta-secondary"
                    on:click={() => dispatch("navigate", { section: "contact" })}
                >
                    Me contacter
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div class="highlight-card">
                    <p class="highlight-value">Fullstack</p>
                    <p class="highlight-label">Applications web et desktop</p>
                </div>

                <div class="highlight-card">
                    <p class="highlight-value">Embarqué</p>
                    <p class="highlight-label">Raspberry Pi, systèmes</p>
                </div>

                <div class="highlight-card">
                    <p class="highlight-value">SNCF</p>
                    <p class="highlight-label">Alternance en environnement industriel</p>
                </div>
            </div>
        </div>

        <div class="hero-visual">
            <div class="visual-card">
                <div class="visual-badge">Disponible pour échanger</div>

                <div class="visual-content">
                    <div class="visual-glow"></div>

                    <div class="space-y-4 relative z-10">
                        <p class="text-slate-400 text-sm uppercase tracking-wider">Profil</p>

                        <h2 class="text-3xl font-bold text-white">Software + Hardware</h2>

                        <p class="text-slate-300 leading-relaxed">
                            Développement d’outils, projets entrepreneuriaux, interfaces embarquées
                            et volonté de monter en compétences en électronique.
                        </p>

                        <div class="flex flex-wrap gap-2 pt-2">
                            <span class="pill">Svelte</span>
                            <span class="pill">Electron</span>
                            <span class="pill">Java</span>
                            <span class="pill">PostgreSQL</span>
                            <span class="pill">Raspberry Pi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

    .hero-visual {
        display: flex;
        justify-content: center;
    }

    .visual-card {
        position: relative;
        width: 100%;
        max-width: 460px;
        min-height: 460px;
        border-radius: 24px;
        padding: 1px;
        background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.7),
            rgba(15, 23, 42, 0.4),
            rgba(59, 130, 246, 0.25)
        );
        box-shadow: 0 20px 60px rgba(2, 6, 23, 0.45);
    }

    .visual-content {
        position: relative;
        overflow: hidden;
        border-radius: 24px;
        height: 100%;
        min-height: 460px;
        padding: 32px;
        background:
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.18), transparent 30%),
            radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.12), transparent 30%),
            rgba(15, 23, 42, 0.96);
        border: 1px solid rgba(71, 85, 105, 0.5);
    }

    .visual-glow {
        position: absolute;
        inset: auto -40px -60px auto;
        width: 220px;
        height: 220px;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.18);
        filter: blur(60px);
    }

    .visual-badge {
        position: absolute;
        top: 18px;
        right: 18px;
        z-index: 20;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.14);
        color: rgb(147, 197, 253);
        border: 1px solid rgba(59, 130, 246, 0.25);
        backdrop-filter: blur(10px);
    }

    .cta-primary,
    .cta-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 0 18px;
        border-radius: 10px;
        font-weight: 600;
        transition: 0.25s ease;
        border: none;
        cursor: pointer;
    }

    .cta-primary {
        background: rgb(59, 130, 246);
        color: rgb(15, 23, 42);
    }

    .cta-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.25);
    }

    .cta-secondary {
        border: 1px solid rgba(71, 85, 105, 0.8);
        color: rgb(226, 232, 240);
        background: rgba(15, 23, 42, 0.55);
    }

    .cta-secondary:hover {
        border-color: rgba(59, 130, 246, 0.5);
        color: white;
    }

    .highlight-card {
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(71, 85, 105, 0.5);
        border-radius: 14px;
        padding: 16px;
    }

    .highlight-value {
        font-size: 1rem;
        font-weight: 700;
        color: white;
        margin-bottom: 4px;
    }

    .highlight-label {
        font-size: 0.85rem;
        color: rgb(148, 163, 184);
        line-height: 1.4;
    }

    .pill {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(30, 41, 59, 0.9);
        color: rgb(147, 197, 253);
        font-size: 0.8rem;
        border: 1px solid rgba(71, 85, 105, 0.45);
    }
</style>
