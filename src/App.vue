<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { FiltersType, Hotel } from './types'
  import filters from './components/Filters.vue'
  import { hotelsConst } from './constants.ts'
  import Hotels from './components/Hotels.vue'

  const allFilters = ref<FiltersType>({
    country: [],
    types: [],
    stars: [],
    reviewsCount: null,
    price: [null, null]
  })
  const data = ref<Hotel[]>([])

  const getData = () => {
    data.value = hotelsConst.filter((hotel, index) => {
      if (index > 2) return
      const filters = allFilters.value
      if (filters.country.length && !filters.country.includes(hotel.country)) return
      if (filters.types.length && !filters.types.includes(hotel.type)) return
      if (filters.stars.length && !filters.stars.includes(hotel.stars)) return
      if (filters.reviewsCount && filters.reviewsCount > hotel.reviews_amount) return
      if (filters.price[0] && filters.price[0] > hotel.min_price) return
      if (filters.price[1] && filters.price[1] < hotel.min_price) return
      return true
    })
  }

  const clearFilters = () => {
    allFilters.value = {
      country: [],
      types: [],
      stars: [],
      reviewsCount: null,
      price: [null, null]
    }
    getData()
  }

  onMounted(() => getData())
</script>

<template>
  <div class="main">
    <filters :filters="allFilters" :clearFilters="clearFilters" :getData="getData" />
    <hotels :hotels="data" />
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    width: 70%;
    margin-left: 15%;
  }
</style>
