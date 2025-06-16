<script lang="ts">
    import {
        Header,
        Hero,
        Products,
        Advantage,
        Gallery,
        Footer,
    } from "$lib"
</script>

<Header />
<main>
    <section class="bg-green h-[100vh] px-24 pt-[80px]">
        <Hero />
    </section>
    <section class="h-[200vh] px-24 pt-[80px]">
        <Products />
    </section>
    <section class="bg-green h-[100vh] px-24">
        <Advantage />
    </section>
    <section class="h-[100vh] px-24">
        <Gallery />
    </section>
</main>
<Footer />





