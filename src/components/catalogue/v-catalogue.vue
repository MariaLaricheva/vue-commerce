<template>
  <div class="v-catalogue">
    <router-link to="/cart" v-bind:cart_data="CART">
      <div class="v-catalogue__link-to-cart">Cart: {{CART.length}} unique items</div>
    </router-link>

    <h1>Catalogue</h1>
      <div class="v-catalogue__list">
      <v-catalogue-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VCatalogueItem from "@/components/catalogue/v-catalogue-item";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-catalogue',
  components: {
    VCatalogueItem
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ])
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('Data arrived successfully')
          }
        })
  }
}
</script>

<style lang="scss">
.v-catalogue {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
   }
  &__link-to-cart {
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
    background: white;
  }
}
</style>