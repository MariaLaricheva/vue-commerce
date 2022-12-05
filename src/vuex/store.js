import {createStore} from 'vuex'
import commonActions from "@/vuex/actions/actions";
import apiRequests from "@/vuex/actions/api-requests";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";

const actions = {...commonActions, ...apiRequests}

let store = createStore({
    state: {
        products: [],
        cart: []
    },
    mutations,       // для изменения данных в стейте
    actions,         // как мутации, но асинхронные
    getters
});

export default store;