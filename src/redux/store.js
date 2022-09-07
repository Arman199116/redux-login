import { configureStore, createSlice } from '@reduxjs/toolkit';
//import { current } from '@reduxjs/toolkit'

const userState = createSlice({
    name : "user",

    initialState : {
        users : [],
        currentUser : {},
        check : {
            isExists : false,
            incorrectEmOrPass : false,
            signUp : false,
            isLoading : false,
        },
        chartDay : 1,
        chartData : {}
    },

    reducers : {
        setUserState : (state, action) => {
            switch (action.payload.type) {
                case 'ADDUSER':
                    state.users.push(action.payload.user)
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
                default:
                    break;
            }
        },
        changeDays : (state, action) => {
            switch (action.payload.type) {
                case 'CHANGEDAYS':
                    return {
                        ...state,
                        chartDay : action.payload.chartDay
                    }
                case 'ADDNEWDATA':
                    return {
                        ...state,
                        chartData : {...state.chartData, [action.payload.data.day] : action.payload.data.value }
                    }
                default:
                    break;
            }
        },
        currentUser : (state, action) => {
            switch (action.payload.type) {
                case 'ADDCURRENTUSER': {
                    state.currentUser = action.payload.user;
                    break;
                }
                case 'CHANGECURRENTUSEREMAIL': {
                    return {
                        ...state,
                        currentUser : {...state.currentUser, email : action.payload.email }
                    }
                }
                case 'CHANGEEMAIL': {
                    const {newEmail, oldEmail} = action.payload.email;
                    return {
                        ...state,
                        users : state.users.map((data) => {
                            if (data.email === oldEmail) {
                                return {...data, email : newEmail};
                            }
                            return data;
                        })
                    }
                }
                default:
                    break;
            }
        },
    }

})
//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
export const selectCheckObj = (state) => state.check;
export const selectUsers = (state) => state.users;
export const selectCurrentUser = (state) => state.currentUser;
export const selectState = (state) => state;
export const selectChartDay = (state) => state.chartDay;
export const selectChartData = (state) => state.chartData[state.chartDay];
export const {setUserState, checkUserExists, signUp, showLoading, changeDays, currentUser} = userState.actions;
const store = configureStore({
    reducer : userState.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;