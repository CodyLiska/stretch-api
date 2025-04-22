<template>
  <div class="flex flex-wrap gap-4 mb-4">
    <select v-model="filters.difficulty" class="p-2 border rounded">
      <option value="">All Difficulties</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>

    <select v-model="filters.muscle" class="p-2 border rounded">
      <option value="">All Muscles</option>
      <option v-for="muscle in muscles" :key="muscle" :value="muscle">{{ muscle }}</option>
    </select>

    <select v-model="filters.tag" class="p-2 border rounded">
      <option value="">All Tags</option>
      <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
    </select>

    <button @click="$emit('apply-filters', filters)" class="px-4 py-2 bg-blue-500 text-white rounded">
      Apply Filters
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const filters = reactive({ difficulty: '', muscle: '', tag: '' })

const muscles = ["Neck", "Shoulders", "Back", "Hips", "Hamstrings", "Quads", "Calves", "Arms", "Wrists", "Core", "Glutes"]
const tags = ["warm-up", "cool-down", "senior-friendly", "pre-natal", "yoga", "mobility"]
</script>
