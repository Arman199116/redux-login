import { configureStore, createSlice } from '@reduxjs/toolkit';

const userState = createSlice({
    name : "user",

    initialState : {
        user : {
            name : '',
            email : '',
            password : '',
        },
        check : {
            isExists : false,
            incorrectEmOrPass : false,
            signUp : false,
            isLoading : false,
        },
    },

    reducers : {
        setUserState : (state, action) => {
            switch (action.payload.type) {
                case 'ADD':
                    state.user = action.payload.user;
                    state.check.incorrectEmOrPass = false;
                    state.check.isExists = true;
                    state.check.signUp = false;
                    break;
                default:
                    break;

            }
        },
        clearStateUser : (state, action) => {
            switch (action.payload.type) {
                case 'DELETE':
                    state.user = {
                        name : '',
                        email : '',
                        password : '',
                    };
                    state.check.isExists = false;
                    break;
                default:
                    break;
            }
        },
        signUp : (state, action) => {
            switch (action.payload.type) {
                case 'SIGNUP':
                    state.check.signUp = action.payload.signUp;
                    break;
                case 'INCORRECT':
                    state.check.incorrectEmOrPass = action.payload.incorrectEmOrPass;
                    break;
                default:
                    break;
            }
        },
        showLoading : (state, action) => {
            switch (action.payload.type) {
                case 'SHOWLOADING':
                    state.check.isLoading = action.payload.isLoading
                    break;
                default:
                    break;
            }
        },
    }

})

export const selectUser = (state) => state.user;
export const selectCheckObj = (state) => state.check;
export const {setUserState, clearStateUser, signUp, showLoading} = userState.actions;
const store = configureStore({reducer : userState.reducer });

export default store;