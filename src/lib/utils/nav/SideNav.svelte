<script lang="ts">
    import NavFooter from "./components/NavFooter.svelte";
    import NavHeader from "./components/NavHeader.svelte";
    import NavSection from "./components/NavSection.svelte";
</script>

<div class="md:hidden bg-bgColor absolute top-0 right-0 h-full w-screen">
    <NavHeader />
    <NavSection />
    <NavFooter />
</div>
