import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                alert('Sản phẩm đã tồn tại trong giỏ hàng');
            } else {
                state.items.push(action.payload);
                state.total += Number(action.payload.price.replace('$', ''));
                console.log(Array.from(state.items));
                console.log(state.total);
            }
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.total -= Number(state.items[index].price.replace('$', ''));
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    }
})


const persistConfig = {
    key: 'cart',
    storage
}

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer)
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions

