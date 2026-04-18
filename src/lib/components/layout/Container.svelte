<script>
    import { 
        ContactForm,
        History,
        OurCoffee 
    } from "$lib";

</script>

<main class="bg-soft-white flex flex-col">
    <section id="ourcoffee" class="flex h-[1450px] flex-col w-screen relative overflow-hidden items-center mb-5">
        <OurCoffee />
    </section>
    <section id="history" class="flex h-auto flex-col w-screen relative overflow-hidden items-center border-t-green border-t-[20px] py-7">
        <History />
    </section>
    <section id="contact" class="bg-soft-black flex flex-col h-auto w-screen p-7 border-t-golden border-t-[20px]">
        <ContactForm />
    </section>
</main>