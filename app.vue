<template>
  <div class="flex flex-col min-h-screen justify-between">
    <app-navigation></app-navigation>
    <NuxtPage />

    <footer class="text-white text-xs py-8">
      <div class="container">
        <NuxtLink to="/">
          <img src="assets/images/logo.svg" class="logo flex h-7" alt="Padel Dao Logo" />
        </NuxtLink>
        <div class="flex flex-col gap-2 sm:flex-row sm:justify-between mt-4">
          <ul class="footer__nav font-bold flex flex-row gap-2">
            <NuxtLink to="/">Contact</NuxtLink>
            <NuxtLink to="/">Privacy policy</NuxtLink>
            <NuxtLink to="/">Terms</NuxtLink>
          </ul>
          <div class="copyright">
            Copyright © 2024 PadelDao. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
