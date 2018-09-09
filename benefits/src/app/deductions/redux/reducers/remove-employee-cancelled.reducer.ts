import { IDeductionsState } from "../deductions.state";

export function reduceRemoveEmployeeCancelled(state: IDeductionsState, action) {
  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeToBeDeleted: null
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
