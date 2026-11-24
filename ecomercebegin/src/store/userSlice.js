import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Исправлено имя ключа на 'users' для консистентности с signUp
    user: JSON.parse(localStorage.getItem('users')) || [],
    currentEmail: localStorage.getItem('currentEmail') || '',
    success: false,
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUp: (state, action) => {
            // Сброс ошибок перед началом новой операции
            state.error = '';
            state.success = false;

            if (state.user.find(user => user.email === action.payload.email)) {
                state.error = 'User already exists';
                return;
            }

            state.user.push(action.payload);
            state.success = true;
            state.currentEmail = action.payload.email;

            localStorage.setItem('users', JSON.stringify(state.user));
            localStorage.setItem('currentEmail', action.payload.email); // Добавлено для синхронизации
        },
        login: (state, action) => {
            // Сброс ошибок перед началом новой операции
            state.error = '';
            state.success = false;

            const foundUser = state.user.find(
                user => user.email === action.payload.email && user.password === action.payload.password
            );

            if (!foundUser) {
                state.error = 'User not found';
                return; // Важно: прерываем выполнение, если пользователь не найден
            }

            // Если пользователь найден и пароль совпал:
            state.success = true;
            state.currentEmail = action.payload.email;
            localStorage.setItem("currentEmail", action.payload.email);
        },
        logout: (state) => {
            state.currentEmail = '';
            state.success = false;
            state.error = '';
            localStorage.removeItem('currentEmail');
        }
    },
});

export const { signUp, logout, login } = userSlice.actions;
export default userSlice.reducer;
