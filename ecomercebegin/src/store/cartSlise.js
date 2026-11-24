import { createSlice } from '@reduxjs/toolkit';

// Вспомогательная функция для пересчета общей стоимости
const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
};

const initialItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
  cartItems: initialItems,
  totalPrice: calculateTotalPrice(initialItems) // Считаем сумму сразу при загрузке из localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      
      if (existing) {
        existing.quantity += 1;
      } else {
        // Добавляем объект целиком (важно, чтобы в action.payload был price)
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      
      // Обновляем общую стоимость и localStorage
      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      
      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        const item = state.cartItems.find(item => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      }
      
      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
