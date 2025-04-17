<script lang="ts">
    import { Facebook, Instagram, Mail } from "@lucide/svelte";
</script>

<div class="flex flex-col w-screen items-center">
    <h2 class="text-[26px] font-extralight">Redes sociales</h2>
    <div class="flex gap-5 mt-5 mb-10">
        <a href="https://www.facebook.com/cerezokaffa" target="_blank"
            ><Facebook
                class="w-7 h-7 hover:cursor-pointer"
            /></a
        >
        <a href="https://www.instagram.com/cerezo.kaffa/" target="_blank"
            ><Instagram
                class="w-7 h-7 hover:cursor-pointer"
            /></a
        >
        <a href="mailto:contacto@cerezodekaffa.com"
            ><Mail
                class="w-7 h-7 hover:cursor-pointer"
            /></a
        >
    </div>
</div>
