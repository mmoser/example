import { reduceRemoveEmployeeCancelled } from "./remove-employee-cancelled.reducer";
import { IDeductionsState } from "../deductions.state";

describe('reduceRemoveEmployeeCancelled', () => {
  const employeeToBeRemoved = {
    employee: {
      firstName: 'Foo',
      lastName: 'Bar',
      dependents: [
        { firstName: 'Anne', lastName: 'Bar' },
        { firstName: 'Bob', lastName: 'Bar' }
      ]
    },
    grossPaycheck: 2000,
    paycheckAmountAfterDeduction: 1925,
    totalCostPerPaycheck: 75,
    dependentCost: 950,
    employeeCost: 1000,
    totalCost: 1950
  };

  const initialState = {
    deductionsPreview: {
      employeeCosts: [
        employeeToBeRemoved
      ],
      employeeToBeDeleted: employeeToBeRemoved
    }
  };

  const action = {}

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceRemoveEmployeeCancelled(initialState as IDeductionsState, action);
    });

    it('should not remove the employee out of employee costs', () => {
      expect(state.deductionsPreview.employeeCosts[0] === employeeToBeRemoved).toBeTruthy();
    });

    it('should set the employee to be deleted to null', () => {
      expect(state.deductionsPreview.employeeToBeDeleted).toBeNull();
    });
  });
});
