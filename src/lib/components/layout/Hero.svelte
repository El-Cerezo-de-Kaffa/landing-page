<script>
    import { go_to_section } from "$lib/utils/helpers/menu";
    import CoffeSack from "../ui/CoffeSack.svelte";
</script>

<section id="hero" class="flex min-h-[500px] h-auto w-full relative overflow-hidden px-7">
    <div class="bg-green pt-2 flex">
        <div class="flex flex-col justify-evenly">
            <div>
               <h2 class="font-serif text-soft-white text-[34px] tracking-widest">Tradición,</h2>
                <h2 class="font-serif text-soft-white text-[32px] tracking-widest">Sabor,</h2>
                <h2 class="font-serif text-soft-white text-[30px] tracking-widest">Aroma.</h2>
            </div>
            <div class="flex flex-col gap-8">
                <p class="font-sans italic text-soft-white text-[16px] w-[192px]">“Café de especialidad para quienes saben disfrutarlo”.</p>
                <button on:click={() => go_to_section("#contact")} class="bg-golden text-center text-soft-white text-[16px] w-[150px] rounded-[8px] py-2">
                    Contáctanos
                </button>
            </div>
            <div class="mt-3">
                <img src="src/assets/logo/logo-removebg-preview.png" alt="logo" width="100">
            </div>
        </div>
    </div>
    <div class="bg-green">
    </div>
    <CoffeSack />
</section>