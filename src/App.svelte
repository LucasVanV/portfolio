<script>
    import About from "./components/About.svelte";
    import Projects from "./components/Projects.svelte";
    import Experience from "./components/Experience.svelte";
    import Formations from "./components/Formations.svelte";
    import Skills from "./components/Skills.svelte";
    import Contact from "./components/Contact.svelte";

    let activeSection = "about";
    let mobileMenuOpen = false;

    const sections = [
        { id: "about", label: "À propos" },
        { id: "projects", label: "Projets perso" },
        { id: "formations", label: "Formations" },
        { id: "experience", label: "Expérience pro" },
        { id: "skills", label: "Compétences" },
        { id: "contact", label: "Contact" },
    ];

    function setSection(section) {
        activeSection = section;
        mobileMenuOpen = false;
    }

    function handleNavigate(event) {
        activeSection = event.detail.section;
        mobileMenuOpen = false;
    }
</script>

<main class="min-h-screen bg-primary">
    <nav class="sticky top-0 bg-secondary border-b border-slate-700 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-accent">Lucas Van Vooren</h1>

            <div class="hidden md:flex gap-8">
                {#each sections as section}
                    <button
                        on:click={() => setSection(section.id)}
                        class="text-slate-300 hover:text-accent transition-colors"
                        class:active={activeSection === section.id}
                    >
                        {section.label}
                    </button>
                {/each}
            </div>

            <button
                class="md:hidden text-slate-300 hover:text-accent"
                on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
            >
                ☰
            </button>
        </div>

        {#if mobileMenuOpen}
            <div class="md:hidden bg-primary border-t border-slate-700 p-4">
                {#each sections as section}
                    <button
                        on:click={() => setSection(section.id)}
                        class="block w-full text-left py-2 px-4 text-slate-300 hover:text-accent hover:bg-secondary rounded transition-colors"
                    >
                        {section.label}
                    </button>
                {/each}
            </div>
        {/if}
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-12">
        {#if activeSection === "about"}
            <About on:navigate={handleNavigate} />
        {:else if activeSection === "projects"}
            <Projects />
        {:else if activeSection === "formations"}
            <Formations />
        {:else if activeSection === "experience"}
            <Experience />
        {:else if activeSection === "skills"}
            <Skills />
        {:else if activeSection === "contact"}
            <Contact />
        {/if}
    </div>
</main>

<style>
    :global(button.active) {
        color: rgb(59, 130, 246);
    }
</style>
