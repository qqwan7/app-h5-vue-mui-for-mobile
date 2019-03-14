/**
 * Created by qqwan on 2019/03/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    getters
})

export default store
