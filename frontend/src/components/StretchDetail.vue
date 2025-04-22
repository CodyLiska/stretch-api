<template>
  <div class="container py-5" v-if="stretch">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-primary mb-4">{{ stretch.name }}</h2>
        <img :src="stretch.imageUrls?.[0]" alt="Stretch image" class="img-fluid mb-4" />
        <p><strong>Description:</strong> {{ stretch.description }}</p>
        <p><strong>Duration:</strong> {{ stretch.duration }} seconds</p>
        <p><strong>Difficulty:</strong> {{ stretch.difficulty }}</p>
        <p><strong>Position:</strong> {{ stretch.position }}</p>
        <p><strong>Muscle Groups:</strong> {{ stretch.muscleGroups?.join(', ') }}</p>
        <p><strong>Equipment:</strong> {{ stretch.equipment?.join(', ') }}</p>
        <p><strong>Tags:</strong> {{ stretch.tags?.join(', ') }}</p>
        <div v-if="stretch.videoUrl" class="mt-4">
          <video controls :src="stretch.videoUrl" class="w-100"></video>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container py-5 text-center">
    <p class="text-muted">Loading stretch details...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const stretch = ref(null)

onMounted(async () => {
  try {
    const { id } = route.params
    const response = await axios.get(`http://localhost:3000/api/stretches/${id}`)
    console.log(`Fetched stretch with ID ${id}:`)
    stretch.value = response.data
  } catch (error) {
    console.error('Failed to load stretch:', error)
  }
})
</script>