<script>
    import { Menu } from '@lucide/svelte';
    import { toggleMenu } from '$lib/utils/helpers/menu';
</script>

<nav class="flex justify-between top-0 w-full h-[100px] border-b-golden border-b-2 px-7">
    <div class="h-full bg-green flex items-center">
        <div class="text-center w-[145px]">
            <h2 class="text-golden font-serif text-[24px] tracking-wider">EL CEREZO</h2>
            <h2 class="text-golden font-serif text-[22px] tracking-wider">DE KAFFA</h2>
        </div>
    </div>
    <div class="h-full bg-green flex items-center justify-end">
        <button on:click={toggleMenu}>
            <Menu class="text-golden size-8"/>
        </button>
    </div>
</nav>