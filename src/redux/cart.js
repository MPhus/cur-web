import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	items: []
}
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const index = state.items.findIndex(item => item.id === action.payload.id)
			if (index >= 0) {
				state.items[index].quantity += action.payload.quantity
			} else {
				state.items.push(action.payload)
			}
		},

		changeQuantity: (state, action) => {
			const index = state.items.findIndex(item => item.id === action.payload.id)
			if (action.payload.quantity > 0) {
				state.items[index].quantity = action.payload.quantity
			} else {
				state.items = state.items.filter(item => item.id !== action.payload.id)
			}
		},
		removeItem: (state, action) => {
			const index = state.items.findIndex(item => item.id === action.payload.id)

			state.items[index].quantity = action.payload.quantity

			state.items = state.items.filter(item => item.id !== action.payload.id)

		}
	}
})

export const { addToCart, changeQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer