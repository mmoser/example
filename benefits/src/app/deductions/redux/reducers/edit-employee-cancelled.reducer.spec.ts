import { IDeductionsState, initialDeductionsState } from "../deductions.state";
import { IEmployee } from "../../../model/employee";
import { reduceEditEmployeeCancelled } from "./edit-employee-cancelled.reducer";

describe('reduceEditEmployeeCancelled', () => {
  const employeeBeingEdited = {
    firstName: 'Foo',
    lastName: 'Bar',
    dependents: [
      { firstName: 'Anne', lastName: 'Bar' },
      { firstName: 'Bob', lastName: 'Bar' }
    ]
  } as IEmployee;

  const previousState = {
    deductionsPreview: {
      employeeBeingEdited: employeeBeingEdited
    }
  };

  const action = {
    payload: { }
  };

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceEditEmployeeCancelled(previousState as IDeductionsState, action);
    });

    it('should set the employee being edited to the employee on the initial state', () => {
      expect(state.deductionsPreview.employeeBeingEdited).toEqual(initialDeductionsState.deductionsPreview.employeeBeingEdited);
    });
  });
});
