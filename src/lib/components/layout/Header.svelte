<script>
    import { Logotipo, NavBar } from "$lib";
    import { Menu } from '@lucide/svelte';
</script>

<header 
    class="bg-green px-6 h-[80px] content-center sticky top-0 left-0 right-0 z-10
    xs:h-[100px]
    sm:px-12
    md:bg-amber-50">
    <div class="flex h-full justify-between items-center">
        <Logotipo />
        <Menu class="text-golden w-[32px] h-[32px]"/>
    </div>
</header>