<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Données Publiques France
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Accédez simplement aux données publiques françaises centralisées depuis les APIs officielles de l'État
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="Recherche d'adresses"
          description="Base Adresse Nationale - Recherchez et géolocalisez n'importe quelle adresse en France"
          icon="📍"
          link="/adresses"
          tags="['Géolocalisation', 'Adresses', 'Communes']"
        />

        <ServiceCard
          title="Données des communes"
          description="Informations complètes sur les 35 000 communes françaises via l'API Géo"
          icon="🏛️"
          link="/communes"
          tags="['INSEE', 'Population', 'Territoire']"
        />

        <ServiceCard
          title="Qualité de l'air"
          description="Indices de qualité de l'air en temps réel pour toute la France"
          icon="🌬️"
          link="#"
          :disabled="true"
          tags="['Environnement', 'Temps réel']"
        />

        <ServiceCard
          title="Données INSEE"
          description="Statistiques démographiques et économiques officielles"
          icon="📊"
          link="#"
          :disabled="true"
          tags="['Statistiques', 'Économie']"
        />

        <ServiceCard
          title="Données transport"
          description="Horaires et informations des transports publics"
          icon="🚇"
          link="#"
          :disabled="true"
          tags="['Transport', 'Mobilité']"
        />

        <ServiceCard
          title="Annuaire entreprises"
          description="Recherche dans la base SIRENE des entreprises françaises"
          icon="🏢"
          link="#"
          :disabled="true"
          tags="['Entreprises', 'SIRET']"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
