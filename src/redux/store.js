import { configureStore, createSlice } from '@reduxjs/toolkit';

const userState = createSlice({
    name : "user",

    initialState : {
        user : {
            name : '',
            email : '',
            password : '',
            isLoggedIn : false
        },
        isExists : false,
        incorrectEmOrPass : false,
        signUp : false,
        signUpIsIncorrect : false,
        succesRegister : false
    },

    reducers : {
        setUserState : (state, action) => {
            switch (action.payload.type) {
                case 'ADD':
                    state.user = action.payload.user;
                    state.incorrectEmOrPass = false;
                    state.isExists = true;
                    state.signUp = false;
                    state.signUpIsIncorrect = false;
                    state.succesRegister = false;
                    break;
                case 'CHANGE':
                    state.user.isLoggedIn = action.payload.isLoggedIn;
                    break;
                case 'SHOW':
                    state.isExists = action.payload.isExists;
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
                        isLoggedIn : false
                    };
                    state.isExists = false;
                    break;
                default:
                    break;
            }
        },
        incorrectData : (state, action) => {
            switch (action.payload.type) {
                case 'INCORRECT':
                    state.incorrectEmOrPass = action.payload.incorrectEmOrPass;
                    break;
                default:
                    break;
            }
        },
        signUp : (state, action) => {
            switch (action.payload.type) {
                case 'SIGNUP':
                    state.signUp = action.payload.signUp;
                    break;
                case 'SIGNUPISINCORRECT':
                    state.signUpIsIncorrect = action.payload.signUpIsIncorrect;
                    break;
                case 'SUCCESREGISTER':
                    state.succesRegister = action.payload.succesRegister;
                    break;
                default:
                    break;
            }
        }
    }

})

export const selectUser = (state) => state.user;
export const selectUserIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserEmail = (state) => state.user.email;
export const selectIsExists = (state) => state.isExists;
export const selectIsincorrect = (state) => state.incorrectEmOrPass;
export const selectSignUp = (state) => state.signUp;
export const selectSignUpIsIncorrect = (state) => state.signUpIsIncorrect;
export const selectSignUpIscorrect = (state) => state.succesRegister;

export const {setUserState, clearStateUser, incorrectData, signUp} = userState.actions;
const store = configureStore({reducer : userState.reducer });

export default store;