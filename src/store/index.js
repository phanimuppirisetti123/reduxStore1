import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterInitialState={counter:0, showCounter:true};
const counterSlice = createSlice({
    name:'counter',
    initialState:counterInitialState,
    reducers:{
        increment(state){state.counter++},
        decrement(state){state.counter--},
        increase(state,action){state.counter=state.counter+action.payload},
        isShow(state){state.showCounter=!state.showCounter},
        reset(state){state.counter=0}
    }
});


const authInitialState = {isAuthenticated:true};
const authSlice = createSlice({
 name:'authentication',
 initialState: authInitialState,
 reducers:{
     login(state){state.isAuthenticated=true},
     logout(state){state.isAuthenticated=false},
 }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
    reducer:{counter:counterSlice.reducer,
            auth:authSlice.reducer}
});

export default store;



