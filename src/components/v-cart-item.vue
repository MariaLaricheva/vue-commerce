<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="item image">
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">{{ cart_item_data.name}}</p>
      <p class="v-cart-item__price">{{ cart_item_data.price.toFixed() }} руб.</p>
      <p class="v-cart-item__price">Артикул: {{ cart_item_data.article}}</p>
    </div>

    <div class="v-cart-item__quantity">
      <button
          class="v-cart-item__delete-item-btn btn"
          @click="deleteItem"
      >Delete</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'v-cart-item',
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      title: 'Cart item'
    }
  },
  computed: {},
  methods: {
    sendDataToParent() {
      this.$emit('sendArticle', this.product_data.article)
    }
  },
  watch: {},
  mounted() {

  }
}

</script>

<style lang="scss">

.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  gap: $padding*3;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding*1.5 $padding*4.5;
  margin-bottom: $margin*2;
  &__info {
    display: flex;
    gap: $padding*3;
  }
  &__image{
    width: 30px;
  }
}
</style>