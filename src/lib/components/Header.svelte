<div class="w-full h-[15vh] bg-primary border-b-[20px] border-secondary px-20">
    <div class="flex items-center h-full">
        <!-- Contenedor del Logo -->
        <div class="flex w-96 justify-center items-center hover:cursor-pointer " id="header-logo">
            <img class="h-30" src="/logo.png" alt="logo">
        </div>
        <!-- Contenedor de la Navegación -->
        <div class="flex w-full items-center justify-around text-white">
            <!-- Nosotros -->
            <p class="text-[40px] font-PlayFair group relative" id="header-nosotros">
                <span class="relative hover:cursor-pointer">Nosotros</span>
                <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
            </p>
            <!-- Productos -->
            <p class="text-[40px] font-PlayFair group relative" id="header-productos">
                <span class="relative hover:cursor-pointer">Productos</span>
                <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
            </p>
            <!-- Contacto -->
            <p class="text-[40px] font-PlayFair group relative" id="header-contacto">
                <span class="relative hover:cursor-pointer">Contacto</span>
                <span class="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 origin-center transition-all group-hover:scale-x-100"></span>
            </p>
        </div>
    </div>
</div>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const logo = document.getElementById('header-logo');
        const nosotros = document.getElementById('header-nosotros');
        const productos = document.getElementById('header-productos');
        const contacto = document.getElementById('header-contacto');
    })
</script>
