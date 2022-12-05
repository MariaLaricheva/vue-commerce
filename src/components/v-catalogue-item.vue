<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="product image">
    <p class="v-catalog-item__name">{{ product_data.name}}</p>
    <p class="v-catalog-item__price">{{ product_data.price.toFixed() }} руб.</p>
    <p>
      Категория: {{product_data.category}}
    </p>
    <p> {{product_data.available ? "В наличии" : "Ожидается"}}</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Add to cart</button>
  </div>
</template>

<script>

export default {
  name: 'v-catalogue-item',
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      title: 'Catalogue item'
    }
  },
  computed: {},
  methods: {
    addToCart(){
      this.$emit('addToCart', this.product_data)
    }
  },
  watch: {},
}

</script>

<style lang="scss">

.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    width: 100px;
  }
}
</style>