import { IDeductionsState } from "../deductions.state";

export function reduceRemoveEmployeeRequested(state: IDeductionsState, action) {
  const { payload } = action;
  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeToBeDeleted: payload.employeeCost
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
