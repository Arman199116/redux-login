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
            isLoadin : false,
        },
        chartDay : 1,
        chartData : {}
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
                case 'CHANGEEMAIL':
                    state.user.email = action.payload.email;
                    break;
                default:
                    break;

            }
        },
        clearStateUser : (state, action) => {
            switch (action.payload.type) {
                case 'DELETE':
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
                case 'SHOWLOADIN':
                    state.check.isLoadin = action.payload.isLoadin
                    break;
                default:
                    break;
            }
        },
        changeDays : (state, action) => {
            switch (action.payload.type) {
                case 'CHANGEDAYS':
                    state.chartDay = action.payload.chartDay
                    break;
                case 'ADDNEWDATA':
                    state.chartData[action.payload.data.day] = action.payload.data.value 
                    break;
                default:
                    break;
            }
        },
    }

})

export const selectCheckObj = (state) => state.check;
export const {setUserState, clearStateUser, signUp, showLoading, changeDays} = userState.actions;
const store = configureStore({
    reducer : userState.reducer ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;