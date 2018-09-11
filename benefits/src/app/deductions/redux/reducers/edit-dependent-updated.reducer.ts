import { IDeductionsState } from "../deductions.state";

export function reduceEditDependentUpdated(state: IDeductionsState, action) {
  const { payload } = action;
  const dependentsClone = state.deductionsPreview.employeeBeingEdited.dependents.splice(0);
  let dependentClone = JSON.parse(JSON.stringify(dependentsClone[payload.index]));
  dependentClone = Object.assign({}, dependentClone, payload.person);
  dependentsClone.splice(payload.index, 1, dependentClone);

  const employee = Object.assign({}, state.deductionsPreview.employeeBeingEdited, { dependents: dependentsClone });

  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeBeingEdited: employee
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
