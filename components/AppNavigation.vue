<template>
    <nav class="navigation container my-7 h-14 text-white flex flex-row justify-between items-center">
        <NuxtLink to="/">
            <img src="assets/images/logo.svg" class="logo flex h-7" alt="Padel Dao Logo" />
        </NuxtLink>
        <div class="hidden md:flex flex-row gap-7 text-sm font-medium">
            <NuxtLink to="/">Il progetto</NuxtLink>
            <NuxtLink to="/">Perchè</NuxtLink>
            <NuxtLink to="/">Vantaggi</NuxtLink>
            <NuxtLink to="/">FAQs</NuxtLink>
            <button @click="openModal()" class="h-fit">Roadmap</button>
        </div>
        <div>
            <NuxtLink to="/contacts" class="button__main cursor-pointer">Contattaci</NuxtLink>
            <button @click="toggleNav" class="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-xs text-gray-500 md:hidden focus:outline-none focus:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div v-if="navOpen">
<!--               TODO: place menu ul in here-->
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue';

    let navOpen = ref(false);

    function openModal() {
        console.log('Open Roadmap Modal');
    }
    
    function toggleNav() {
        navOpen = !navOpen;
    }
</script>
