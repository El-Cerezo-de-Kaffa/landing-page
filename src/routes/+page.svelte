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
        class="bg-green min-h-[calc(100svh-80px)] px-7 flex items-center min-w-screen
        xs:min-h-[calc(100svh-100px)] xs:h-[80%] xs:px-8 xs:py-0
        sm:min-h-[calc(100svh-120px)] sm:px-12 sm:h-[90%]
        lg:min-h-[calc(100svh-140px)] lg:px-16
        xl:px-20
        2xl:px-24
        3xl:px-28">
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