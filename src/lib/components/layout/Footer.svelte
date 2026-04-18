<script>
    import { go_to_section } from "$lib/utils/helpers/menu";
    import { Mail } from "@lucide/svelte";
    import { Facebook, Instagram, Tiktok } from "svelte-bootstrap-icons";
    import { logo } from "$lib";
</script>

<footer class="text-soft-white flex flex-col items-center h-auto px-7">
    <hr class="w-full border-t border-soft-white mt-10">
    <div class="flex flex-col justify-center items-center gap-4 mt-5">
        <div>
            <button on:click={() => {go_to_section("#main")}} class="border-0">
                <img src={logo} alt="Logo" width="140">
            </button>
        </div>
        <button on:click={() => {go_to_section("#main")}} class="text-center">
            <h3 class="font-serif text-2xl w-[158px] tracking-widest">Cerezo de Kaffa</h3>
        </button>
        <div class="flex mt-4 gap-6">
            <a href="https://www.facebook.com/cerezokaffa" target="_blank">
                <Facebook class="w-7 h-7 hover:cursor-pointer hover:scale-125 transition"/>
            </a>
            <a href="https://www.instagram.com/cerezo.kaffa/" target="_blank">
                <Instagram class="w-7 h-7 hover:cursor-pointer hover:scale-125 transition"/>
            </a>
            <a href="https://www.tiktok.com/@cerezo.de.kaffa" target="_blank">
                <Tiktok class="w-7 h-7 hover:cursor-pointer hover:scale-125 transition"/>
            </a>
            <a href="mailto:contacto@cerezodekaffa.com">
                <Mail class="w-7 h-7 hover:cursor-pointer hover:scale-125 transition"/>
            </a>
        </div>
        <div class="my-4 pb-5">
            <p class="text-sm">
                &copy; 2024 Todos los derechos reservados.
            </p>
        </div>
    </div>
</footer>