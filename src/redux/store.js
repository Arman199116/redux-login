import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const userState = createSlice({
    name : "user",

    initialState : {
        users : {},
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
                    let a = action.payload.user.email;
console.log(  a   );
                    return {
                        ...state,
                        users: {
                            ...state.users,
                            [a] : action.payload.user,
                        }
                    }
                case 'CHANGEEMAIL':
                    state.users[action.payload.email.old] = action.payload.email.new;
                    break;
                default:
                    break;

            }
        },
        checkUserExists : (state, action) => {
            switch (action.payload.type) {
                case 'ISEXISTS':
                    state.check.isExists = action.payload.isExists;
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
export const {setUserState, checkUserExists, signUp, showLoading, changeDays} = userState.actions;
const store = configureStore({
    reducer : userState.reducer ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;