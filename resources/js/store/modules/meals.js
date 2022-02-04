export const meals = {
    namespaced: true,
    state: () => ({all: []}),
    getters: {
        getAll: state => state.all,
        getById: state => id => state.all.find(item => item.id === id),
    },
    mutations: {
        SET_ALL: (state, payload) => (state.all = payload),
    },
    actions: {
        async setAll({commit}) {
            const {data} = await axios.get('meals');
            commit('SET_ALL', data);
        },
        async create({commit}, payload) {
            console.log();
            const {data} = await axios.post('meals', payload);
            commit('SET_ALL', data);
        },
        async removeMeal({commit}, payload) {
            const {data} = await axios.post('remove-meal', {mealId: payload});
            commit('SET_ALL', data);
        },

        async updateMeal({commit}, payload) {
            const {data} = await axios.post('update-meal', {mealId: payload});
            commit('SET_ALL', data);
        },

        async getCurrentMeal({commit}, payload) {
            const {data} = await axios.post('remove-meal', {mealId: payload});
            commit('SET_ALL', data);
        },
    },
};