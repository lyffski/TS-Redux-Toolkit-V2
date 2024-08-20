import { configureStore } from "@reduxjs/toolkit";
//import reducers of sliceces
import reservationsReducer from "../feature/reservationSlice";
import customerReducer from "../feature/customerSlice";

export const store = configureStore({
  reducer: { //combinte reduders together
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>; //export return of store (only 2 reducer in this ex.)
export type AppDispatch = typeof store.dispatch;
