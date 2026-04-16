<script>
    import Contact from "../sections/Contact.svelte";
    import History from "../sections/History.svelte";
    import OurCoffee from "../sections/OurCoffee.svelte";

</script>

<main class="flex flex-col">
    <section class="bg-soft-white flex h-[1460px] flex-col w-screen relative overflow-hidden items-center">
        <OurCoffee />
    </section>

    <section class="bg-soft-white flex h-[920px] flex-col w-screen relative overflow-hidden items-center border-t-green border-t-[20px]">
        <History />
    </section>
    <section class="flex flex-col h-[720px] w-screen px-7">
        <Contact />
    </section>
</main>