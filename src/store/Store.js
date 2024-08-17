import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../state/userAuthSlice";

export default configureStore({
    reducer:{
          userAuth:userAuthReducer
    }
})