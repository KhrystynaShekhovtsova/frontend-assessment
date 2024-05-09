<template>
    <div class="container">
        <h1 class="text-xl lg:text-xxl uppercase text-white mb-6 text-center">
            <span class="italic font-medium">NEXT LEVEL PADEL</span>
            <br> CONTRIBUISCI CON IL TUO CLUB
            <br> ALLA
            <span class="font-medium italic">RIVOLUZIONE</span>
        </h1>
        <p class="text-white text-lg block px-12 text-center">
            Contattaci per maggiori informazioni o per candidare il tuo Club.
            <br> Utilizza il modulo sottostante o inviaci una e-mail a
            <a class="text-lime-900" href="mailto:info@padeldao.com">info@padeldao.com</a>
        </p>

        <section class="form mt-20">
            <form @submit.prevent="handleSubmit">
                <div>
                    <label>Nome del tuo Club</label>
                    <input type="text" required placeholder="Inserisci il nome">
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const formContact = ref({});

    function handleSubmit() {
        console.log('submitted');
    }

</script>
