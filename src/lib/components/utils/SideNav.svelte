<script lang="ts">
    import { 
        X,
        Facebook,
        Instagram,
        Mail,
    } from "@lucide/svelte";
</script>

<nav class="md:hidden bg-bgColor absolute top-0 right-0 h-full w-screen">
    <div class="relative flex items-center h-[150px] max-h-[150px] w-full px-6">
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logoBW.png" alt="logo blanco y negro" class="max-h-[150px]" />
        </div>
        <div class="ml-auto flex items-center gap-4 mr-6">
          <h1 class="font-extralight text-[18px]">MENÚ</h1>
          <button class="hover:cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>
    <div class="flex flex-col w-full h-[calc(100vh-150px)] items-end justify-evenly">
        <h2 class="mr-12">PRODUCTOS</h2>
        <h2 class="mr-12">NOSOTROS</h2>
        <h2 class="mr-12">TIENDA</h2>
    </div>
    <div class="flex flex-col items-center justify-center">
        <h2>Redes sociales</h2>
        <div class="flex">
            <a href="https://www.facebook.com/cerezokaffa" target="_blank">
                <Facebook />
            </a>
            <a href="https://www.instagram.com/cerezo.kaffa/" target="_blank">
                <Instagram />
            </a>
            <a href="mailto:contacto@cerezodekaffa.com">
                <Mail />
            </a>
        </div>
    </div>
</nav>