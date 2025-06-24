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
        class="flex bg-green min-h-[calc(100svh-80px)] py-7 px-7 justify-center
        xs:px-10 xs:min-h-[calc(100svh-100px)]
        sm:px-12 sm:py-24 sm:min-h-[calc(100svh-120px)] sm:items-center
        lg:px-16 lg:min-h-[calc(100svh-140px)]
        xl:px-20
        2xl:px-28 2xl:min-h-[calc(100svh-180px)]
        3xl:px-28">
        <Hero />
    </section>
    <section class="" id="Products-section">
        <!-- <Products /> -->
    </section>
    <!-- <section class="bg-green h-[100vh] px-24 py-[144px] 3xl:px-96 3xl:py-60" id="Advantage-section">
        <Advantage />
    </section>
    <section class="h-[100vh] px-24 3xl:px-96">
        <Gallery />
    </section> -->
</main>
<!-- <Footer /> -->