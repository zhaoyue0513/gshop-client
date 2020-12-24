import {reqCategoryList} from '@/api'

const state = {
    categoryList:[]
}

const mutations = {
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList
    }
}

const actions = {
    async getCategoryList({commit}){
        //发送ajax请求
        const result = await reqCategoryList()
        //如果返回的是成功
        if(result.code === 200){
            const categoryList = result.data
            //把成功的数据给mutation
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }

}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}