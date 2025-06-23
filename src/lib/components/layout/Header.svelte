<script>
    import { Logotipo, NavBar } from "$lib";
    import { Menu } from '@lucide/svelte';
</script>

<header 
    class="bg-green px-6 h-[80px] content-center sticky top-0 left-0 right-0 z-10 border-b border-golden
    xs:h-[100px] xs:px-8
    sm:h-[120px] sm:px-12
    lg:h-[140px] lg:px-16
    xl:px-20
    2xl:px-24 
    3xl:px-28">
    <div class="flex h-full justify-between items-center">
        <Logotipo />
        <Menu 
            class="text-golden w-[32px] h-[32px]
            xs:w-[36px] xs:h-[36px]
            sm:w-[40px] sm:h-[40px] 
            lg:hidden"/>
        <div class="hidden lg:block">
            <NavBar />
        </div>
    </div>
</header>