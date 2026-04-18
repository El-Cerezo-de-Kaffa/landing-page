<script>
    import { form_options } from "$lib/utils/helpers/helper";
</script>

<div class="w-full">
    <label for="clientType" class="block text-soft-white font-bold text-lg">
            Tipo de cliente
    </label>
    <select name="clientType" id="clientType" bind:value={form_options.clientType} required class="text-soft-gray w-full h-[45px] text-[18px] border-b-white border-b-1 focus:outline-none bg-transparent pt-3 pb-2">
        <option value="" disabled selected>Selecciona una opción</option>
        <option value="cafeteria">Cafetería</option>
        <option value="restaurante">Restaurante</option>
        <option value="oficina">Oficina</option>
        <option value="personal">Consumo personal</option>
    </select>
</div>

<div class="w-full">
    <label for="contactMethod" class="block text-soft-white font-bold text-lg">
            Método de contacto preferido
    </label>
    <select name="contactMethod" id="contactMethod" bind:value={form_options.contactMethod} required class="text-soft-gray w-full h-[45px] text-[18px] border-b-white border-b-1 focus:outline-none bg-transparent pt-3 pb-2">
        <option value="" disabled selected>Selecciona una opción</option>
        <option value="email">Correo electrónico</option>
        <option value="whatsapp">WhatsApp</option>
    </select>
</div>

{#if form_options.contactMethod === "email"}
    <div class="w-full">
        <label for="email" class="block text-soft-white font-bold text-lg">
                Correo electrónico
        </label>
        <input type="email" bind:value={form_options.email} inputmode="email" id="email" placeholder="Ingresa tu correo electrónico" required class="text-soft-gray text-[18px] border-b-white border-b-1 w-full h-[45px] focus:outline-none bg-transparent pt-3 pb-2">
    </div>
{:else if form_options.contactMethod === "whatsapp"}
    <div class="w-full">
        <label for="phone" class="block text-soft-white font-bold text-lg">
                Número de teléfono
        </label>
        <input type="tel" bind:value={form_options.phone} inputmode="tel" id="phone" placeholder="Ingresa tu número de teléfono" required class="text-soft-gray text-[18px] border-b-white border-b-1 w-full h-[45px] focus:outline-none bg-transparent pt-3 pb-2">
    </div>
{/if}

<div class="w-full">
    <label for="message" class="block text-soft-white font-bold text-lg">
        Comentarios adicionales
    </label>
    <textarea id="message" placeholder="Ingresa tu mensaje" bind:value={form_options.message} class="text-soft-white text-[18px] italicborder-white border-1 w-full h-[250px] focus:outline-none bg-transparent pt-2 pl-2 pb-1 mt-3"></textarea>
</div>