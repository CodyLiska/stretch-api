<template>
  <div class="p-4 bg-white shadow rounded-lg">
    <img :src="stretch.imageUrls[0]" alt="stretch image" class="w-full h-48 object-cover rounded" />
    <h2 class="mt-2 font-bold text-lg">{{ stretch.name }}</h2>
    <p class="text-sm text-gray-600">{{ stretch.description }}</p>
    <p class="mt-1 text-sm text-gray-500">⏱ {{ stretch.duration }} sec | 💪 {{ stretch.difficulty }}</p>
    <div class="flex flex-wrap gap-1 mt-2">
      <span v-for="tag in stretch.tags" :key="tag" class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">{{ tag
        }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ stretch: Object });
</script>
