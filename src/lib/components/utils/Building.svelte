<div class="flex flex-col h-screen w-screen items-center justify-center gap-10">
    <div class="w-full flex flex-col items-center justify-center">
        <img
            src="/logoBW.png"
            alt="logo"
            class="w-1/2 md:w-1/3 lg:w-1/4 mx-auto items-center justify-center"
        />

        <h1
            class="text-3xl md:text-4xl lg:text-5xl font-bold font-PlayFair -tracking-tighter"
        >
            Próximamente
        </h1>
    </div>
    <div class="flex w-full justify-center">
        <p class="text-2xl md:text-3xl lg:text-4xl" id="timer">
            0:00
        </p>
    </div>
</div>

<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        const timer = document.getElementById('timer');
        console.log(timer)
    })
</script>
