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
<main >
    <section class="bg-green h-[100vh] px-24 pt-[80px] 2xl:px-96 2xl:pt-60">
        <Hero />
    </section>
    <section class="h-[210vh] px-24 mt-[100px] 2xl:px-96 2xl:pt-60">
        <Products />
    </section>
    <section class="bg-green h-[100vh] px-24 py-[144px] 2xl:px-96 2xl:py-60">
        <Advantage />
    </section>
    <section class="h-[100vh] px-24 2xl:px-96">
        <Gallery />
    </section>
</main>
<Footer />





