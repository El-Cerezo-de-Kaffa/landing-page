<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    // Fecha de lanzamiento
    const launchDate = {
        year: 2025,
        month: 5, // 0 Enero, 11 Diciembre
        day: 1,
    };

    var countDownDate = new Date(
        launchDate.year,
        launchDate.month - 1,
        launchDate.day,
    ).getTime();
    let interval: number;

    onMount(() => {
        interval = setInterval(updateCountdown, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var timerElement = document.getElementById("timer");
        if (timerElement) {
            const formattedDays = String(days).padStart(2, "0");
            const formattedHours = String(hours).padStart(2, "0");
            const formattedMinutes = String(minutes).padStart(2, "0");
            const formattedSeconds = String(seconds).padStart(2, "0");

            timerElement.innerText = `${formattedDays} días ${formattedHours} horas ${formattedMinutes} minutos ${formattedSeconds} segundos`;
        }

        if (distance < 0) {
            clearInterval(interval);
            if (timerElement) {
                timerElement.innerText = "¡Ya estamos aquí!";
            }
        }
    }
</script>

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
        <p class="text-2xl md:text-3xl lg:text-4xl" id="timer"></p>
    </div>
</div>
