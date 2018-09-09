import { IDeductionsState } from "../deductions.state";
import { reduceEditEmployee } from "./edit-employee.reducer";
import { IEmployee } from "../../../model/employee";

describe('reduceEditEmployee', () => {
  const initialState = {
    deductionsPreview: {
      employeeBeingEdited: null
    }
  };

  const employeeToEdit = {
    firstName: 'Foo',
    lastName: 'Bar',
    dependents: [
      { firstName: 'Anne', lastName: 'Bar' },
      { firstName: 'Bob', lastName: 'Bar' }
    ]
  } as IEmployee;

  const action = {
    payload: { employee: employeeToEdit }
  };

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceEditEmployee(initialState as IDeductionsState, action);
    });

    it('should set the employee being edited to the employee passed in on action', () => {
      expect(state.deductionsPreview.employeeBeingEdited).toEqual(employeeToEdit);
    }); 
  });
});
