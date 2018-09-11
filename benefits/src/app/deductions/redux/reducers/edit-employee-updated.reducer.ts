import { IDeductionsState } from "../deductions.state";

export function reduceEditEmployeeUpdated(state: IDeductionsState, action) {
  const { payload } = action;
  const employee = Object.assign({}, state.deductionsPreview.employeeBeingEdited, payload.person);

  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeBeingEdited: employee
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
