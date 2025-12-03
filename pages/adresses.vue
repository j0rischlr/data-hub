<template>
  <div class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          Recherche d'adresses
        </h1>
        <p class="text-gray-600">
          Base Adresse Nationale - Recherchez n'importe quelle adresse en France
        </p>
      </div>

      <div class="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <form @submit.prevent="handleSearch" class="space-y-4">
          <div>
            <label for="search" class="block text-sm font-medium text-gray-700 mb-2">
              Adresse, ville ou code postal
            </label>
            <div class="flex gap-3">
              <input
                id="search"
                v-model="searchQuery"
                type="text"
                placeholder="Ex: 20 avenue de Ségur, Paris"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                :disabled="loading"
              />
              <button
                type="submit"
                :disabled="loading || searchQuery.length < 3"
                class="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {{ loading ? 'Recherche...' : 'Rechercher' }}
              </button>
            </div>
            <p v-if="searchQuery.length > 0 && searchQuery.length < 3" class="text-sm text-gray-500 mt-2">
              Minimum 3 caractères requis
            </p>
          </div>
        </form>
      </div>

      <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p class="text-sm text-red-800">
          <span class="font-semibold">Erreur:</span> {{ error.message }}
        </p>
      </div>

      <div v-if="results && results.features.length > 0" class="space-y-4">
        <div class="text-sm text-gray-600 mb-4">
          {{ results.features.length }} résultat{{ results.features.length > 1 ? 's' : '' }} trouvé{{ results.features.length > 1 ? 's' : '' }}
        </div>

        <div
          v-for="feature in results.features"
          :key="feature.properties.id"
          class="bg-white rounded-lg border border-gray-200 p-5 hover:border-primary-300 hover:shadow-sm transition-all"
        >
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ feature.properties.label }}
              </h3>

              <div class="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span class="text-gray-500">Type:</span>
                  <span class="ml-2 text-gray-900 font-medium">
                    {{ getTypeLabel(feature.properties.type) }}
                  </span>
                </div>

                <div>
                  <span class="text-gray-500">Score:</span>
                  <span class="ml-2 text-gray-900 font-medium">
                    {{ (feature.properties.score * 100).toFixed(0) }}%
                  </span>
                </div>

                <div>
                  <span class="text-gray-500">Code postal:</span>
                  <span class="ml-2 text-gray-900 font-medium">
                    {{ feature.properties.postcode }}
                  </span>
                </div>

                <div>
                  <span class="text-gray-500">Ville:</span>
                  <span class="ml-2 text-gray-900 font-medium">
                    {{ feature.properties.city }}
                  </span>
                </div>

                <div class="col-span-2">
                  <span class="text-gray-500">Coordonnées:</span>
                  <span class="ml-2 text-gray-900 font-mono text-xs">
                    {{ feature.geometry.coordinates[1].toFixed(6) }}, {{ feature.geometry.coordinates[0].toFixed(6) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="ml-4 text-2xl">
              📍
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!loading && hasSearched && results?.features.length === 0" class="text-center py-12">
        <div class="text-4xl mb-4">🔍</div>
        <p class="text-gray-600">Aucun résultat trouvé pour votre recherche</p>
      </div>

      <div v-else-if="!hasSearched" class="text-center py-12">
        <div class="text-4xl mb-4">📍</div>
        <p class="text-gray-600">Saisissez une adresse pour commencer la recherche</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApiAddressResponse, ApiError } from '~/types/api'

const { searchAddress } = useApiAddress()

const searchQuery = ref('')
const results = ref<ApiAddressResponse | null>(null)
const error = ref<ApiError | null>(null)
const loading = ref(false)
const hasSearched = ref(false)

const handleSearch = async () => {
  if (searchQuery.value.length < 3) return

  loading.value = true
  error.value = null
  hasSearched.value = true

  const response = await searchAddress(searchQuery.value, 10)

  results.value = response.data
  error.value = response.error
  loading.value = response.loading
}

const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    housenumber: 'Numéro',
    street: 'Rue',
    locality: 'Lieu-dit',
    municipality: 'Commune'
  }
  return labels[type] || type
}

useHead({
  title: 'Recherche d\'adresses - Données Publiques France'
})
</script>
