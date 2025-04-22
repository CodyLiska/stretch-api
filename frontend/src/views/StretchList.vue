<template>
  <div class="container py-5">
    <div class="text-center mb-4">
      <h2 class="display-4">All Stretches</h2>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="stretch in stretches" :key="stretch._id">
        <router-link :to="`/stretch/${stretch._id}`" class="text-decoration-none">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">{{ stretch.name }}</h5>
              <p class="card-text">
                <strong>Difficulty:</strong> {{ stretch.difficulty }}
              </p>
              <p class="card-text">
                <strong>Muscle Groups:</strong> {{ stretch.muscleGroups.join(', ') }}
              </p>
              <p v-if="stretch.tags && stretch.tags.length">
                <strong>Tags:</strong>
                <span class="badge bg-primary me-1" v-for="tag in stretch.tags" :key="tag">
                  {{ tag }}
                </span>
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const stretches = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/stretches')
    stretches.value = response.data
  } catch (error) {
    console.error('Error loading stretches:', error)
  }
})
</script>