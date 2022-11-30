<template>
  <div class="v-catalogue">
    Catalogue
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
import VCatalogueItem from "@/components/v-catalogue-item";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-catalogue',
  components: {
    VCatalogueItem
  },
  props: {},
  data() {
    return {

      title: 'Catalogue'
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
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
}
</style>