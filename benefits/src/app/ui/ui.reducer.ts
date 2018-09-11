import { IUiState, initialState } from "./ui.state";
import { DeductionsActions } from "../deductions/redux/deductions.actions";

export function reduceUiState(state: IUiState = initialState, action) {
  switch (action.type) {
    case DeductionsActions.EDIT_EMPLOYEE_SAVED:
      return Object.assign({}, state, { actionOnGoing: true });
    case DeductionsActions.EDIT_EMPLOYEE_COST_RECEIVED:
      return Object.assign({}, state, { actionOnGoing: false });
    default:
      return state;
  }
}
