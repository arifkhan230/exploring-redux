// state 
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const initialState = {
    count: 0
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}
const resetCounterAction = () => {
    return {
        type: RESET
    }
}
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

// CREATING REDUCER
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:

            return {
                ...state,
                count: state.count - 1
            }
        case RESET:

            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:

            return {
                ...state,
                count: state.count + action.payload
            }

        default:
            state;
    }
}


// store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterByValue(10))