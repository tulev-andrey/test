export interface FiltersType {
  country: string[]
  types: string[]
  stars: number[]
  reviewsCount: number | null
  price: (number | null)[]
}
export interface Hotel {
  name: string
  country: string
  address: string
  stars: number
  type: string
  description: string
  services: string[]
  min_price: number
  currency: string
  rating: number
  reviews_amount: number
  last_review: string
  book?: boolean
}
