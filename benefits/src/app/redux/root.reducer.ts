import { IAppState } from "./app.state";
import { combineReducers } from "redux";
import { reduceUiState } from "../ui/ui.reducer";
import { routerReducer } from '@angular-redux/router';
import { reduceDeductionsState } from "../deductions/redux/deductions.reducer";

export const rootReducer = combineReducers<IAppState>({
  uiState: reduceUiState,
  deductionsState: reduceDeductionsState,
  router: routerReducer
});
