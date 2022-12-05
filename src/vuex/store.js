import {createStore} from 'vuex'
import axios from "axios";


let store = createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {        // для изменения данных в стейте
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let doesProductExist = false;
                state.cart.map(item => {
                    if (item.article === product.article) {
                        doesProductExist = true;
                        item.quantity++;
                    }
                })
                if (!doesProductExist) {
                    state.cart.push({...product, quantity: 1})
                }
            } else {
                state.cart.push({...product, quantity: 1})
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity === 1) {
                state.cart.splice(index, 1)
            } else {
                state.cart[index].quantity--
            }
        }
    },
    actions: {          // как мутации, но асинхронные
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log('error: ', error);
                    return error;
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART ({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM ({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM ({commit}, index) {
            commit('DECREMENT', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;