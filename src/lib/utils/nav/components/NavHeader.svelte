<script lang="ts">
    import { X } from "@lucide/svelte";
    import { isMenuOpen } from "$lib/stores/menuStore";
</script>

<div class="relative flex items-center h-[150px] max-h-[150px] w-full px-6">
    <div class="absolute left-1/2 transform -translate-x-1/2">
        <img
            src="/logoBW.png"
            alt="logo blanco y negro"
            class="max-h-[134px]"
        />
    </div>
    <div class="ml-auto flex items-center gap-2">
        <h1 class="font-extralight text-[18px]">MENÚ</h1>
        <button class="hover:cursor-pointer" on:click={() => isMenuOpen.update(v => !v)}>
            <X class="w-5 h-5" />
        </button>
    </div>
</div>
