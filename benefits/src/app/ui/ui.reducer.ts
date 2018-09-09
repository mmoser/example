import { IUiState, initialState } from "./ui.state";

export function reduceUiState(state: IUiState = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
