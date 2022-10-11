import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import open from './Reducers/MobileReducer';
import items from './Reducers/SkillsReducer';
import Slider from  './Reducers/SliderReducer'




export const store = configureStore({
    reducer: {
        open,
        items,
        Slider
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
