import { useSelector } from "react-redux";
import { RootState } from ".";

export const useAppState = () => 
  useSelector((state: RootState) => state.app)
