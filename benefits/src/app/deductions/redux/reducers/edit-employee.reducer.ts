import { IDeductionsState } from "../deductions.state";

export function reduceEditEmployee(state: IDeductionsState, action) {
  const { payload } = action;
  const employee = JSON.parse(JSON.stringify(payload.employee));

  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeBeingEdited: employee
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
