import { useSelector } from "react-redux";
import { RootState } from ".";
// import { IAppState } from "./state";

export const useAppState = () => 
  useSelector((state: RootState) => state.app)
