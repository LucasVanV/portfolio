<script>
    import { fly } from "svelte/transition";

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
    <!-- NAVBAR -->
    <nav class="sticky top-0 bg-secondary border-b border-slate-700 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-accent">Lucas Van Vooren</h1>

            <!-- Desktop -->
            <div class="hidden md:flex gap-8">
                {#each sections as section}
                    <button
                        on:click={() => setSection(section.id)}
                        class="nav-item"
                        class:selected={activeSection === section.id}
                    >
                        {section.label}
                    </button>
                {/each}
            </div>

            <!-- Burger -->
            <button
                class="md:hidden text-slate-300 hover:text-accent transition"
                on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
            >
                {#if mobileMenuOpen}
                    ✕
                {:else}
                    ☰
                {/if}
            </button>
        </div>

        <!-- Mobile menu -->
        {#if mobileMenuOpen}
            <div
                class="md:hidden bg-primary border-t border-slate-700 p-4"
                in:fly={{ y: -10, duration: 200 }}
                out:fly={{ y: -10, duration: 150 }}
            >
                {#each sections as section}
                    <button
                        on:click={() => setSection(section.id)}
                        class="mobile-item"
                        class:selected={activeSection === section.id}
                    >
                        {section.label}
                    </button>
                {/each}
            </div>
        {/if}
    </nav>

    <!-- CONTENT -->
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
    /* ===== DESKTOP NAV ===== */
    .nav-item {
        position: relative;
        color: rgb(148, 163, 184);
        transition: 0.2s;
        font-weight: 500;
    }

    .nav-item:hover {
        color: white;
    }

    .nav-item.selected {
        color: rgb(59, 130, 246);
    }

    /* underline animé */
    .nav-item::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 0%;
        height: 2px;
        background: rgb(59, 130, 246);
        border-radius: 999px;
        transition: width 0.25s ease;
    }

    .nav-item.selected::after {
        width: 100%;
    }

    /* ===== MOBILE NAV ===== */
    .mobile-item {
        display: block;
        width: 100%;
        text-align: left;
        padding: 10px 16px;
        color: rgb(148, 163, 184);
        border-radius: 6px;
        transition: 0.2s;
    }

    .mobile-item:hover {
        background: rgba(15, 23, 42, 0.6);
        color: white;
    }

    .mobile-item.selected {
        color: rgb(59, 130, 246);
        background: rgba(59, 130, 246, 0.1);
    }
</style>
