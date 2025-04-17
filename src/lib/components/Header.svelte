<script>
    import { Equal } from "@lucide/svelte";
    import { isMenuOpen } from "$lib/stores/menuStore";

    import SideNav from "$lib/utils/nav/SideNav.svelte";
</script>

<header class="w-full bg-primary border-b-[20px] border-secondary h-[150px] max-h-[150px] flex items-center justify-center">
    <div class="flex items-center justify-start w-[42%]">
        <img src="/logo.png" alt="logo" class="max-h-[125px] lg:ml-20">
    </div>
    <div class="lg:hidden flex items-center justify-end h-[100px] max-h[100px] w-[42%]">
        <button class="hover:cursor-pointer flex items-center text-white gap-3 font-light" on:click={() => isMenuOpen.update(v => !v)}>
            <Equal class="text-bgColor w-8 h-8"/>
            MENÚ
        </button>
    </div>
    <div class="hidden lg:flex w-full items-center justify-around text-white">
            
        <p class="text-[40px] font-PlayFair group relative" id="header-nosotros">
            <span class="relative hover:cursor-pointer">Nosotros</span>
            <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
        </p>
        
        <p class="text-[40px] font-PlayFair group relative" id="header-productos">
            <span class="relative hover:cursor-pointer">Productos</span>
            <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
        </p>
        
        <p class="text-[40px] font-PlayFair group relative" id="header-contacto">
            <span class="relative hover:cursor-pointer">Contacto</span>
            <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
        </p>
    </div>
    {#if $isMenuOpen}
        <SideNav />
    {/if}
</header>

<!-- <div class="w-full h-[15vh] bg-primary border-b-[20px] border-secondary px-20">
    <div class="flex items-center h-full">
        
        <div class="flex w-96 justify-center items-center hover:cursor-pointer " id="header-logo">
            <img class="h-30" src="/logo.png" alt="logo">
        </div>

        <div class="flex w-full items-center justify-around text-white">
            
            <p class="text-[40px] font-PlayFair group relative" id="header-nosotros">
                <span class="relative hover:cursor-pointer">Nosotros</span>
                <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
            </p>
            
            <p class="text-[40px] font-PlayFair group relative" id="header-productos">
                <span class="relative hover:cursor-pointer">Productos</span>
                <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
            </p>
            
            <p class="text-[40px] font-PlayFair group relative" id="header-contacto">
                <span class="relative hover:cursor-pointer">Contacto</span>
                <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
            </p>
        </div>
    </div>
</div> -->
