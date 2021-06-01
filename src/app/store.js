import { configureStore } from "@reduxjs/toolkit";
import vistaMascotaReducer from "../features/vistaMascota/vistaMascotaSlice";

export default configureStore({
  reducer: vistaMascotaReducer,
});
