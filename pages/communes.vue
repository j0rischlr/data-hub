<template>
  <div class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          Données des communes
        </h1>
        <p class="text-gray-600">
          Informations sur les 35 000 communes françaises
        </p>
      </div>

      <div class="bg-white rounded-lg border border-gray-200 p-6 text-center">
        <div class="text-4xl mb-4">🏛️</div>
        <p class="text-gray-600 mb-4">
          Cette fonctionnalité sera bientôt disponible
        </p>
        <NuxtLink
          to="/"
          class="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Retour à l'accueil
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Communes - Données Publiques France'
})
</script>
