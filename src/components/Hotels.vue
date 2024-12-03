<script setup lang="ts">
  import { CalendarOutlined, CheckOutlined, EnvironmentOutlined, StarFilled } from '@ant-design/icons-vue'
  import { Hotel } from '../types.ts'

  const { hotels } = defineProps<{ hotels: Hotel[] }>()

  const declension = (value: number, words: string[]) => {
    value = Math.abs(value) % 100
    const num = value % 10
    if (value > 10 && value < 20) return words[2]
    if (num > 1 && num < 5) return words[1]
    if (num === 1) return words[0]
    return words[2]
  }

  const format = (value: number) => {
    if (!value) return 0
    return value.toLocaleString()
  }
</script>

<template>
  <div class="hotels">
    <div class="hotel" v-for="hotel of hotels">
      <div class="row_1">
        <div class="left">
          <h2 class="name">{{ hotel.name }}</h2>
          <div class="info">
          <div class="stars">
            <StarFilled
              v-for="index of [1, 2, 3, 4, 5]"
              :style="{ color: hotel.stars >= index ? '#FFA900' : '#D7D7D7' }"
            />
          </div>
          <div class="type">{{ hotel.type }}</div>
          <div class="dot"></div>
          <div class="reviews">
            {{ hotel.reviews_amount }} {{ declension(hotel.reviews_amount, ['отзыв', 'отзыва', 'отзывов']) }}
          </div>
          <EnvironmentOutlined class="mark" />
          <div class="country">{{ hotel.country }}</div>
        </div>
        </div>
        <div class="price">
          <h2 class="count">{{ format(hotel.min_price) }} ₽</h2>
          <p class="desc">Цена за 1 ночь</p>
        </div>
      </div>
      <div class="row_2">
        <div class="description">{{ hotel.description }}</div>
        <a-button v-if="hotel.book" class="button green" @click="() => (hotel.book = !hotel.book)">
          <CheckOutlined /> Забронировано
        </a-button>
        <a-button v-if="!hotel.book" class="button purple" @click="() => (hotel.book = !hotel.book)">
          <CalendarOutlined /> Забронировать
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hotels {
    margin-left: 30px;
  }
  .hotel {
    border: 1px solid #EAEAEA;
    border-radius: 15px;
    padding: 26px;
    margin: 15px 0;
  }
  .row_1 {
    display: ruby-text;
    width: 100%;
  }
  .name {
    margin: 0;
  }
  .info {
    display: flex;
    margin-top: 8px;
  }
  .stars {
    margin-right: 12px;
  }
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #949494;
    margin: auto 12px;
  }
  .mark {
    margin-left: 12px;
    margin-right: 6px;
  }
  .left {
    width: 50%;
  }
  .price {
    width: 50%;
    text-align: right;
  }
  .count {
    margin: 0;
    font-size: 25px;
  }
  .desc {
    margin: 0;
    font-size: 12px;
    color: #868686
  }
  .row_2 {
    display: flex;
  }
  .description {
    font-size: 19px;
    max-width: 560px;
  }
  .button {
    margin-left: 30px;
    width: 179px;
    height: 40px;
  }
  .green {
    background-color: rgba(0, 187, 109, 0.3);
    color: #00BB6D;
  }
  .purple {
    background-color: rgba(106, 83, 245, 0.3);
    color: #6A53F5;
  }
</style>
