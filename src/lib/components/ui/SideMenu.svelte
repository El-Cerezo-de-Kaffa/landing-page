<script>
    import { toggleMenu, go_to_section } from "$lib/utils/helpers/menu";
    import { X } from "@lucide/svelte";
</script>


<aside class="bg-green flex flex-col h-svh w-screen">
    <div class="flex justify-end p-7">
        <button on:click={toggleMenu}>
            <X class="size-10 text-soft-white"/>
        </button>
    </div>
    <ul class="flex flex-col text-soft-white text-3xl h-[80%] items-center justify-center gap-10">
        <li>
            <button on:click={() => go_to_section("#hero")}>
                Inicio
            </button>
        </li>
        <li>
            <button on:click={() => go_to_section("#ourcoffee")}>
                Nuestro café
            </button>
        </li>
        <li>
            <button on:click={() =>  go_to_section("#history")}>
                Historia
            </button>
        </li>
        <li>
            <button on:click={() =>  go_to_section("#contact")}>
                Contacto
            </button>
        </li>
    </ul>
</aside>