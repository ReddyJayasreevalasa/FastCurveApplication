import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalogList: [],
  totalPrize: 0,
  profile:{}
};
export const ProductDataSlice = createSlice({
  name: "CatalogList",
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      console.log(action);
      state.catalogList = action.payload;
    },
    addToCart: (state, action) => {
      const data = [...state.catalogList];
      const index = action.payload.index;
      data[index].qty = action.payload.qty;
      data[index].isAdded = true;
      state.catalogList = data;
      state.totalPrize += data[index].qty * data[index].unitPrice;
    },
    deleteFromCart: (state, action) => {
      const data = [...state.catalogList];
      const index = action.payload;
      data[index].isAdded = false;
      state.catalogList = data;
      state.totalPrize -= data[index].qty * data[index].unitPrice;
    },
    setProfile:(state,action)=>{
        state.profile=action.payload;
    }
  },
});
export const { setCatalog, addToCart, deleteFromCart,setProfile } =
ProductDataSlice.actions;
export default ProductDataSlice.reducer;