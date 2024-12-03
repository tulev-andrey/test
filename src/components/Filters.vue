<script setup lang="ts">
  import { checkboxesOptions, countries, typesOptions } from '../constants'
  import { FiltersType } from '../types'
  import { CloseOutlined, SearchOutlined } from '@ant-design/icons-vue'

  const { filters, getData, clearFilters } = defineProps<{
    filters: FiltersType
    getData: () => void
    clearFilters: () => void
  }>()

  const formatter = (value: number) => {
    if (!value) return ''
    return value.toLocaleString() + ' ₽'
  }
  const parser = (value: string) => {
    return value.replace(/\s|₽/g, '')
  }
  const change = () => {
    if (filters.reviewsCount) filters.reviewsCount = Math.round(Math.abs(filters.reviewsCount))
  }
</script>

<template>
  <div class="filters">
    <p class="title">Страна</p>
    <a-select
      class="select_country"
      placeholder="Поиск стран"
      mode="multiple"
      v-model:value="filters.country"
      show-search
      :options="countries"
      :max-tag-count="1"
    >
      <template #suffixIcon><SearchOutlined class="ant-select-suffix" /></template>
    </a-select>
    <p class="title">Тип</p>
    <a-select class="select_type" mode="multiple" v-model:value="filters.types" :options="typesOptions" />
    <p class="title">Количество звезд</p>
    <a-checkbox-group class="checkboxes" v-model:value="filters.stars" :options="checkboxesOptions" />
    <p class="title">Количество отзывов (от)</p>
    <a-input-number
      class="reviews_count"
      v-model:value="filters.reviewsCount"
      placeholder="Например, от 10"
      @change="change"
    />
    <p class="title">Цена</p>
    <div class="price_inputs">
      <a-input-number v-model:value="filters.price[0]" :formatter="formatter" :parser="parser" />
      <p class="divider"></p>
      <a-input-number v-model:value="filters.price[1]" :formatter="formatter" :parser="parser" />
    </div>
    <a-slider class="slider" v-model:value="filters.price" range :max="5000" @change="change" />
    <a-button class="button accept" @click="getData">Применить фильтр</a-button>
    <a-button class="button clear" @click="clearFilters"><CloseOutlined />Очистить фильтр</a-button>
  </div>
</template>

<style scoped>
  .filters {
    width: 325px;
    height: 100vh;
    margin-top: 50px;
  }
  .title {
    font-family: Arial, serif;
    font-style: normal;
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
  .select_country {
    width: 325px;
  }
  .select_type {
    width: 325px;
  }
  .checkboxes {
    width: 325px;
  }
  :deep(.ant-checkbox-wrapper) {
    min-width: 90px;
  }
  .reviews_count {
    width: 325px;
  }
  .price_inputs {
    display: inline-flex;
    height: 32px;
    width: 325px;
    align-items: center;
    justify-content: center;
  }
  .divider {
    margin: 0 5px;
    width: 10px;
    border: 1px solid #c4c4c4;
  }
  .slider {
    width: 325px;
  }
  .button {
    width: 325px;
    height: 56px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  .accept {
    margin-top: 30px;
    background-color: #6a53f5;
    color: white;
  }
  .clear {
    margin-top: 15px;
    border: 1px solid #c4c4c4;
  }
</style>
