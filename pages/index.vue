<template>
   <main class="h-full pt-44">
       <section class="container text-center lg:px-6">
           <div class="relative">
               <span class="label bg-lime-900 rotate-[15deg] right-[-0.2em] top-[-1.4em]">A COSTO ZERO</span>
               <h1 class="text-xl lg:text-extralg uppercase italic text-white mb-6">PORTA IL TUO PADEL CLUB AL LIVELLO SUCCESSIVO</h1>
           </div>
           <p class="text-white text-lg block px-12">
               Aumenta gli accessi, ospita gli eventi esclusivi e i nostri viaggi allenamento. Ci occuperemo di supportarti nell’intera organizzazione.
           </p>
           <button class="button__main mt-11" @click="">Candidati subito</button>
       </section>

       <section class="images-rotated py-7 mx-auto flex flex-col lg:flex-row w-fit">
           <img src="assets/images/img-1-1.svg" alt="Padel dao" class="-rotate-[13deg] z-20 mt-24 -mx-16">
           <img src="assets/images/img-2-1.svg" alt="Padel dao" class="rotate-[2deg] z-[11]">
           <img src="assets/images/img-3-1.svg" alt="Padel dao" class="-rotate-[2.3deg] z-10 mt-12 -mx-4">
           <img src="assets/images/img-4-1.svg" alt="Padel dao" class="rotate-[7.4deg] -mx-4 mt-6">
       </section>

       <section class="container pt-48 pb-32">
           <div class="relative ml-8 pl-4">
               <span class="label bg-lightgray-900 -rotate-[8deg] left-0 top-[-2em]">IL PROGETTO</span>
               <h2 class="text-lg lg:text-xl text-white">
                   Il Padel World Club DAO
                   <br> mira a
                   <span class="header-span">rivoluzionare
                       <img src="assets/images/rotate-icon.svg">
                   </span>
                   <br> l'esperienza del
                   <span class="header-span">padel
                       <img src="assets/images/ball-icon.svg"></span>
                   creando
                   <br> un circuito elitario di club
                   <br> diffusi
                   <span class="header-span">globalmente
                       <img src="assets/images/globe-icon.svg"></span>
                   attraverso
                   <br> la tecnologia web3.
               </h2>
           </div>
       </section>

       <section class="py-11 border-t border-b border-white">
           <h2 class="arrows-line questrial">
               REVOLUTIONARY
               <img src="assets/images/arrow-icon.svg">
               <span class="opacity-25 not-italic">INNOVATIVE</span>
               <img src="assets/images/arrow-icon.svg">
           </h2>
       </section>

       <section class="container text-center">
           <h2>COSA CHIEDIAMO AI NOSTRI PARTNER</h2>
           <button class="button__main mt-11" @click="">Candidati subito</button>
       </section>

       <section class="container bg-lightgray-900">
           <h2>Hai delle domande?</h2>
       </section>

       <section class="container bg-lime-900 text-center px-6">
           <h2>
               SEI PRONTO PER IL PROSSIMO LIVELLO? IL TUO CLUB MERITA DI DISTINGUERSI A LIVELLO GLOBALE.
           </h2>
       </section>
   </main>
</template>

<style scoped>
    .images-rotated img {
        @apply w-[16.2em] xl:w-[18.2em] 2xl:w-[22.2em];
    }

    .arrows-line {
        @apply text-lg lg:text-xl 2xl:text-extralg font-normal text-white italic tracking-wide;
        @apply block sm:flex sm:flex-row sm:items-center sm:gap-5 sm:justify-between;
    }

    .arrows-line img {
        @apply inline mx-1 sm:mx-0 h-8 lg:h-16 2xl:h-20;
    }
</style>
