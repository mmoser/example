import { IUiState, initialState } from "../ui/ui.state";
import { IDeductionsState, initialDeductionsState } from "../deductions/redux/deductions.state";

export interface IAppState {
  uiState: IUiState,
  deductionsState: IDeductionsState,
  router: string
}

export const INITIAL_STATE = {
  uiState: initialState,
  deductionsState: initialDeductionsState,
  router: null
} as IAppState;
