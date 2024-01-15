const { createStore, combineReducers } = require("redux")

// products Constants
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT "

// cart Constants
const GET_CART_ITEMS = "GET_CART_ITEMS"
const ADD_CART_ITEMS = "ADD_CART_ITEMS "

// PRODUCTS STATES
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}
// CARTS STATES
const initialCartState = {
    cart: ["sugar", ],
    numberOfProducts: 1,
}

// PRODUCTS ACTIONS
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}
// CARTS ACTIONS
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product,
    }
}

// Product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:

            return {
                ...state
            }
        case ADD_PRODUCT:

            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
           return state;
    }
}
// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:

            return {
                ...state
            }
        case ADD_CART_ITEMS:

            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
           return state;
    }
}

// combining reducer 
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getCart())
store.dispatch(getProducts())

store.dispatch(addCart("milk"))
store.dispatch(addProduct("tea"))