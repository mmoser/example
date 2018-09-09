import { IDeductionsState, initialDeductionsState } from "../deductions.state";

export function reduceEditEmployeeCancelled(state: IDeductionsState, action) {
  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeBeingEdited: initialDeductionsState.deductionsPreview.employeeBeingEdited
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
