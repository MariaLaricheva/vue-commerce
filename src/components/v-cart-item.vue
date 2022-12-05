<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="item image">
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">{{ cart_item_data.name }}</p>
      <p class="v-cart-item__price">Артикул: {{ cart_item_data.article }}</p>
      <p class="v-cart-item__price">{{ cart_item_data.price.toFixed() }} руб.</p>
    </div>

    <div class="v-cart-item__quantity">
      <span class="v-cart-item__quantity-btn" @click="decrementItem">
-
      </span>
      <p>Кол-во: {{ cart_item_data.quantity }}</p>
      <span class="v-cart-item__quantity-btn" @click="incrementItem">
+
      </span>
    </div>
    <button
        class="v-cart-item__delete-item-btn btn"
        @click="deleteFromCart"
    >Delete
    </button>
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
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    decrementItem() {
      this.$emit('decrementCartItem')
     // this.DECREMENT_CART_ITEM(this.cart_item_data.article)
    },
    incrementItem() {
      this.$emit('incrementCartItem')
      //this.INCREMENT_CART_ITEM()
    }
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

  &__image {
    width: 30px;
  }
}

.v-cart-item__quantity {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-cart-item__quantity-btn {
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;
  margin: 0 $margin;
  text-align: center;
  width: 25px;
  height: 25px;
}
</style>