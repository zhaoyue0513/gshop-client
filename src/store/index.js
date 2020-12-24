import Vuex from 'vuex'
import Vue from 'vue'

import home from './moudles/home'
import user from './moudles/user'

Vue.use(Vuex)

const mutations = {

}

const actions = {

}

const getters = {
    
}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        home,
        user
    }
})