<template>
  <component
    :is="disabled ? 'div' : 'NuxtLink'"
    :to="link"
    :class="[
      'block p-6 bg-white rounded-lg border transition-all duration-200',
      disabled
        ? 'border-gray-200 opacity-60 cursor-not-allowed'
        : 'border-gray-200 hover:border-primary-400 hover:shadow-md cursor-pointer'
    ]"
  >
    <div class="flex items-start justify-between mb-4">
      <div class="text-3xl">{{ icon }}</div>
      <span
        v-if="disabled"
        class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
      >
        Bientôt
      </span>
    </div>

    <h3 class="text-lg font-semibold text-gray-900 mb-2">
      {{ title }}
    </h3>

    <p class="text-sm text-gray-600 mb-4 leading-relaxed">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in parsedTags"
        :key="tag"
        class="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded"
      >
        {{ tag }}
      </span>
    </div>
  </component>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  link: string
  disabled?: boolean
  tags: string
}

const props = defineProps<Props>()

const parsedTags = computed(() => {
  try {
    return JSON.parse(props.tags)
  } catch {
    return []
  }
})
</script>
