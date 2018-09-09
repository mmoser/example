import { IDeductionsState, initialDeductionsState } from "../deductions.state";
import { IDependent } from "../../../model/dependent";

export function reduceAddDependent(state: IDeductionsState, action) {
  const dependent = { firstName: '', lastName: '' } as IDependent;
  const dependentsClone = state.deductionsPreview.employeeBeingEdited.dependents.splice(0);
  dependentsClone.push(dependent);

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
