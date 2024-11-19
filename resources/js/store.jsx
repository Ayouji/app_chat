import { configureStore } from "@reduxjs/toolkit";
import ContactUserSlice  from "./reducers/SliceContactUser";


export const Store = configureStore(
    {
        reducer:{
            Listecontact: ContactUserSlice
        }
    }
)
//  default Store;