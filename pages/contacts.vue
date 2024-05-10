<template>
    <div class="container">
        <h1 class="text-lg md:text-xl lg:text-xxl uppercase text-white mt-20 mb-6 text-center">
            <span class="italic font-medium">NEXT LEVEL PADEL</span>
            <br> CONTRIBUISCI CON IL TUO CLUB
            <br> ALLA
            <span class="font-medium italic">RIVOLUZIONE</span>
        </h1>
        <p class="text-white text-base md:text-lg block px-12 text-center">
            Contattaci per maggiori informazioni o per candidare il tuo Club.
            <br> Utilizza il modulo sottostante o inviaci una e-mail a
            <a class="text-lime-900" href="mailto:info@padeldao.com">info@padeldao.com</a>
        </p>

        <section class="form mt-20 max-w-2xl mx-auto">
            <form @submit.prevent="handleSubmit" class="px-4 text-white flex flex-col gap-9 mb-11">
                <div>
                    <label>Nome del tuo Club</label>
                    <input v-model="formContact.name" type="text" required placeholder="Inserisci il nome">
                </div>
                <div>
                    <label>P.IVA/VAT</label>
                    <input v-model="formContact.vatNumber" type="number" required placeholder="Inserisci la P.IVA">
                </div>
                <div>
                    <label>E-mail</label>
                    <input v-model="formContact.email" type="email" required placeholder="Indirizzo email">
                </div>
                <div>
                    <label>In quale città si trova il tuo Club?</label>
                    <input v-model="formContact.city" type="text" required placeholder="Città">
                </div>
                <button class="button__main w-full">Invia la candidatura</button>
            </form>
            <p class="text-center text-white text-sm">
                Cliccando su "Invia la candidatura", accetti la nostra <NuxtLink class="text-lime-900" to="/">Privacy Policy</NuxtLink> e consenti a PadelDao di utilizzare queste informazioni per scopi di marketing.
            </p>
        </section>

        <section class="container px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-24 bg-lightblue-900 py-12 mt-36">
            <div>
                <img src="assets/images/pitch-images.png" alt="PadelDao Pitch">
            </div>
            <div>
                <h3 class="text-darkblue-900 text-lg mb-5 mt-5 lg:mt-0">PadelDao Pitch</h3>
                <p class="text-md text-navy-900">
                    Vuoi scoprire di più su di noi? Qui potrai esplorare il nostro progetto, scoprire
                    la nostra mission e vision, capire perché
                    per unirti a noi e conoscere le soluzioni
                    che proponiamo ai problemi più diffusi. Approfondirai i dettagli delle nostre membership card NFT e i servizi unici
                    che offriamo.
                </p>
                <button class="bg-black text-white mt-7 py-5 px-11">Downlaod pitch</button>
            </div>

        </section>
    </div>
</template>

<style scoped>
    form > div {
        @apply flex flex-col;
    }
    form label {
       @apply text-sm mb-3;
    }
    form input {
        @apply text-sm w-full border-slate-300 focus:outline-none py-5 pl-7 bg-lightbeige-900 text-black;
        @apply placeholder:text-gray-900 placeholder:font-normal;
    }
</style>

<script setup>
    import { ref } from 'vue';

    const formContact = ref({});

    function handleSubmit() {
        console.log('submitted', formContact.value);
    }

</script>
