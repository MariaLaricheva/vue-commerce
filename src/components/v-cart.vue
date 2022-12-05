<template>
  <div class="v-cart">
    <router-link to="/">
      <div class="v-cart__link-to-catalogue">Back to shopping</div>
    </router-link>
   <h1>Cart</h1>
    <p v-if="!CART.length">There are no items in cart</p>

    <v-cart-item
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @incrementCartItem="incrementCartItem(index)"
        @decrementCartItem="decrementCartItem(index)"
    />

    <div class="v-cart__total">
      <div class="total__name">Total: </div>
      <div class="total__count">{{cartTotalCount}}руб</div>
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions, mapGetters} from "vuex";


export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: { },
  data() {
    return { }
  },
  computed: {
     ...mapGetters([
         'CART',

     ]),
    cartTotalCount() {
      let result = 0

      if (!this.CART.length) {
        return 0
      }

      for (let item of this.CART) {
        result += item.quantity * item.price.toFixed()
      }
      console.log(result)
      return result;
    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    decrementCartItem(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    incrementCartItem(index) {
      this.INCREMENT_CART_ITEM(index)
    }
  },
  mounted() {
  }
}

</script>

<style lang="scss">
.v-cart {
  &__link-to-catalogue {
    position: absolute;
     top: 10px;
     right: 10px;
     padding: $padding*2;
     border: solid 1px #aeaeae;
     background: white;
   }
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*3;
    display: flex;
    justify-content: center;
    background: $primary;
    color: white;
    font-size: 20px;

    .total__name {
      margin-right: $margin*2;
    }

    .total__count {
    }
  }
}
</style>