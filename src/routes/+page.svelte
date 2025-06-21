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
    <section 
        class="bg-green min-h-[calc(100vh-80px)] px-6 py-6 flex items-center
        xs:h-[calc(100vh-100px)] xs:py-20">
        <Hero />
    </section>
    <!-- <section class="h-[210vh] px-24 mt-[100px] 3xl:px-96 3xl:pt-60" id="Products-section">
        <Products />
    </section> -->
    <!-- <section class="bg-green h-[100vh] px-24 py-[144px] 3xl:px-96 3xl:py-60" id="Advantage-section">
        <Advantage />
    </section>
    <section class="h-[100vh] px-24 3xl:px-96">
        <Gallery />
    </section> -->
</main>
<!-- <Footer /> -->