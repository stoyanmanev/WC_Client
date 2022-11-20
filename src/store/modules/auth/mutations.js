export default {
    setUser(state, payload){
        state.user = payload;
    },
    loadUsers(state, payload){
        state.usersList = payload;
    }
};