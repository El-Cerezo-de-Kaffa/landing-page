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
    <section class="bg-green h-[calc(100vh-140px)] px-24 pt-[50px]">
        <Hero />
    </section>
    <section class="h-[200vh] bg-amber-50 px-24 pt-[50px]">
        <Products />
    </section>
    <section>
        <Advantage />
    </section>
    <section>
        <Gallery />
    </section>
</main>
<Footer />





