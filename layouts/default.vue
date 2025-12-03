<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">FR</span>
            </div>
            <span class="text-xl font-semibold text-gray-900">Données Publiques</span>
          </NuxtLink>

          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink
              to="/"
              class="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              active-class="text-primary-600"
            >
              Accueil
            </NuxtLink>
            <NuxtLink
              to="/adresses"
              class="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              active-class="text-primary-600"
            >
              Adresses
            </NuxtLink>
            <NuxtLink
              to="/communes"
              class="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              active-class="text-primary-600"
            >
              Communes
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-sm text-gray-600">
          <p>Données fournies par les APIs publiques de l'État français</p>
          <p class="mt-2">
            <a
              href="https://api.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-600 hover:text-primary-700"
            >
              api.gouv.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
