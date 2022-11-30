<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
    <v-cart
        v-if="CART.length"
        :cart_data="CART"
    />
    <v-catalogue/>
  </div>
</template>

<script>
import VCatalogue from "@/components/v-catalogue";
import VCart from "@/components/v-cart";
import { mapGetters } from "vuex";

export default {
  name: 'v-main-wrapper',
  components: {
    VCatalogue,
    VCart
  },
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {

  }
}
</script>

<style>
.v-main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;
}
</style>