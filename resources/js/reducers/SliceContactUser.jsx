// import PayloadAction from "@reduxjs/toolkit" PayloadAction

import { useForm, usePage } from "@inertiajs/react"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
        
const  DataContactState = {
    contact:[
    ]
  }

  export const chargerState = createAsyncThunk('' ,async ()=>{
    // const {get} = useForm(

    // );
    
    
    return [{name:"ahmed"}];
})
  
   const ContactUserSlice = createSlice({
    name: 'Listecontact',
    initialState : DataContactState,
    reducers: {
        ChargeDataContact:(state,action)=>{
                // Charger data in state 
                state.contact = action.payload.datacontact 
        }

    },
    // extraReducers:(builder) =>{
    //     builder.addCase(chargerState.fulfilled),(state, action)=>{
    //         state.contact = action.payload
            
    //     }
    // },
    // extraReducers: (builder) => {
    //     builder.addCase(getAuthnUser.fulfilled, (state, { payload }) => {
    //         state.resp = payload
    //     }) // <------- HERE
    // }, 
  })
  
  // Action creators are generated for each case reducer function
  export const { ChargeDataContact } = ContactUserSlice.actions
  
  export default ContactUserSlice.reducer