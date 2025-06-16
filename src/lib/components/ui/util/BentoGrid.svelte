<script>
    import Card from "../Card.svelte";
</script>

<div class="flex w-full items-center justify-center">
    <div class="grid w-full gap-y-[100px] p-2 grid-cols-2 grid-rows-2">
        <div
            class="col-span-1 row-span-1 flex items-center justify-center"
        >
            <Card />
        </div>

        <div
            class="col-span-1 row-span-1 flex items-center justify-center"
        >
            <Card />
        </div>

        <div
            class="col-span-1 row-span-1 flex items-center justify-center"
        >
            <Card />
        </div>

        <div
            class="col-span-1 row-span-1 flex items-center justify-center"
        >
            <Card />
        </div>
    </div>
</div>
