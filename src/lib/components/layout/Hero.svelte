<script>
    import CoffeSack from "../ui/CoffeSack.svelte";
</script>
<section class="flex min-h-[600px] w-full relative overflow-hidden px-7">
    <div class="w-[60%] bg-green pt-5 flex">
        <div class="flex flex-col justify-evenly h-[90%]">
            <div>
               <h2 class="font-serif text-soft-white text-[34px] tracking-widest">Tradición,</h2>
                <h2 class="font-serif text-soft-white text-[32px] tracking-widest">Sabor,</h2>
                <h2 class="font-serif text-soft-white text-[30px] tracking-widest">Aroma.</h2>
            </div>
            <div class="flex flex-col gap-8">
                <p class="font-sans italic text-soft-white text-[16px] w-[192px]">“Café de especialidad para quienes saben disfrutarlo”.</p>
                <button class="bg-golden text-soft-white text-[16px] w-[150px] h-[37px] rounded-[8px]">Contáctanos</button>
            </div>
            <div class="mt-6">
                <img src="src/assets/logo/logo-removebg-preview.png" alt="logo" class="w-[100px]">
            </div>
        </div>
    </div>
    <div class="w-[40%] bg-green">
    </div>
    <CoffeSack />
</section>