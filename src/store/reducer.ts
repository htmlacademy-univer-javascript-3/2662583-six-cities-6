import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortType } from './action';
import { Offer } from '../mocks/offers';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export default reducer;
