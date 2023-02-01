import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {AppDispatch} from './index';
import ProductInterface from '../interface/product.interface';

const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=DESC';

const headers = {
    headers: {
        accept: 'application/json'
    }
}

const cart = createSlice({
	name: 'cart',
	initialState: {
		counter: 0,
		cartOpen: 'none',
		products: [],
		productsSelected: [] as ProductInterface[],
	},
	reducers: {
		increment(state) {
			state.counter += 1;
		},
		decrement(state) {
			state.counter -= 1;
		},
		openCart(state) {
			state.cartOpen = 'flex';
		},
		closeCart(state) {
			state.cartOpen = 'none';
		},
		getProducts(state, action: PayloadAction<never[]>) {
			state.products = action.payload;
		},
		addToCart(state, action: PayloadAction<ProductInterface>) {
			state.productsSelected = [...state.productsSelected, action.payload];
		},
		keepAdding(state, action: PayloadAction<ProductInterface[]>) {
			state.productsSelected = action.payload;
		},
		removeFromCart(state, action: PayloadAction<ProductInterface[]>) {
			state.productsSelected = action.payload;
		},
	},
});

export const {
	decrement,
	increment,
	openCart,
	closeCart,
	getProducts,
	addToCart,
	keepAdding,
	removeFromCart,
} = cart.actions;

export function asyncGetProducts(): any {
    return async function (dispatch: AppDispatch) {
        await axios(url, headers)
        .then(res => {
            dispatch(getProducts(res.data.products));
        })
	};
};

export default cart.reducer;
