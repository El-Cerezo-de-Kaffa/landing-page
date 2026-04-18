<script>
    import NavBar from '$lib/components/layout/NavBar.svelte';
    import Hero from '$lib/components/layout/Hero.svelte';
    import Container from '$lib/components/layout/Container.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';
    import { isActive } from '$lib/utils/stores/stores'
    import SideMenu from '$lib/components/ui/SideMenu.svelte';
    import { browser } from '$app/environment';

  $: if (browser) {
    document.body.style.overflow = $isActive ? 'hidden' : 'auto';
  }

</script>

{#if $isActive}
    <div class="fixed inset-0 z-20">
        <SideMenu />
    </div>
{/if}
<NavBar />
<Hero />
<Container />
<Footer />

