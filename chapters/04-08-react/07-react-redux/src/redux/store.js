import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './root-reducer';

export const store = configureStore({ reducer: mainReducer });
