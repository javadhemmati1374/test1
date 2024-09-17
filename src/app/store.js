"use client";

import { configureStore } from "@reduxjs/toolkit";

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
