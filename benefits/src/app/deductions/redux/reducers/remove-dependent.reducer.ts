import { IDeductionsState, initialDeductionsState } from "../deductions.state";
import { IDependent } from "../../../model/dependent";

export function reduceRemoveDependent(state: IDeductionsState, action) {
  const { payload } = action;

  const dependentsClone = state.deductionsPreview.employeeBeingEdited.dependents.splice(0);
  dependentsClone.splice(payload.index, 1);

  const employee = Object.assign({},
    state.deductionsPreview.employeeBeingEdited,
    { dependents: dependentsClone }
  );

  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeBeingEdited: employee
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
