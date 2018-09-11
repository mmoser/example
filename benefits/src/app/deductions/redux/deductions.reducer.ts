import { IDeductionsState, initialDeductionsState } from "./deductions.state";
import { DeductionsActions } from "./deductions.actions";
import { reduceRemoveEmployeeRequested } from "./reducers/remove-employee-requested.reducer";
import { reduceRemoveEmployeeCancelled } from "./reducers/remove-employee-cancelled.reducer";
import { reduceRemoveEmployeeConfirmed } from "./reducers/remove-employee-confirmed.reducer";
import { reduceAddDependent } from "./reducers/add-dependent.reducer";
import { reduceRemoveDependent } from "./reducers/remove-dependent.reducer";
import { reduceEditEmployee } from "./reducers/edit-employee.reducer";
import { reduceEditEmployeeCancelled } from "./reducers/edit-employee-cancelled.reducer";
import { reduceEditEmployeeUpdated } from './reducers/edit-employee-updated.reducer';
import { reduceEditDependentUpdated } from './reducers/edit-dependent-updated.reducer';
import { reduceEditEmployeeCostReceived } from './reducers/edit-employee-cost-received.reducer';

export function reduceDeductionsState(state: IDeductionsState = initialDeductionsState, action) {
  switch (action.type) {
    case DeductionsActions.REMOVE_EMPLOYEE_REQUESTED:
      return reduceRemoveEmployeeRequested(state, action);
    case DeductionsActions.REMOVE_EMPLOYEE_REQUESTED_CANCELLED:
      return reduceRemoveEmployeeCancelled(state, action);
    case DeductionsActions.REMOVE_EMPLOYEE_REQUESTED_CONFIRMED:
      return reduceRemoveEmployeeConfirmed(state, action);
    case DeductionsActions.ADD_DEPENDENT:
      return reduceAddDependent(state, action);
    case DeductionsActions.REMOVE_DEPENDENT:
      return reduceRemoveDependent(state, action);
    case DeductionsActions.ADD_EMPLOYEE:
    case DeductionsActions.EDIT_EMPLOYEE:
      return reduceEditEmployee(state, action);
    case DeductionsActions.EDIT_EMPLOYEE_CANCELLED:
      return reduceEditEmployeeCancelled(state, action);
    case DeductionsActions.EDIT_EMPLOYEE_UPDATED:
      return reduceEditEmployeeUpdated(state, action);
    case DeductionsActions.EDIT_DEPENDENT_UPDATED:
      return reduceEditDependentUpdated(state, action);
    case DeductionsActions.EDIT_EMPLOYEE_COST_RECEIVED:
      return reduceEditEmployeeCostReceived(state, action);
    default:
      return state;
  }
}
