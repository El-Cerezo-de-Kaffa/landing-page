<script>
    import Form from "./Form.svelte";
    import { send_information_from_form } from "$lib/utils/helpers/helper";
</script>

<form action="" class="flex flex-col mt-6 gap-9 items-center">
     <Form />
    <button on:click={send_information_from_form} class="bg-golden text-soft-white text-[16px] w-[250px] h-[50px] rounded-[8px] font-bold">Contáctanos</button>
</form>