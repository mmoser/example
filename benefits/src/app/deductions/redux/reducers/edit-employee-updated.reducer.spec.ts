import { IDeductionsState } from "../deductions.state";
import { IEmployee } from "../../../model/employee";
import { reduceEditEmployeeUpdated } from './edit-employee-updated.reducer';

describe('reduceEditEmployeeUpdated', () => {
  const initialState = {
    deductionsPreview: {
      employeeBeingEdited: {
        firstName: 'Foo',
        lastName: 'Bar',
        dependents: [
          { firstName: 'Anne', lastName: 'Bar' },
          { firstName: 'Bob', lastName: 'Bar' }
        ]
      } as IEmployee
    }
  };

  const person = { firstName: 'Anne', lastName: 'Bar' };

  const action = {
    payload: { person: person }
  };

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceEditEmployeeUpdated(initialState as IDeductionsState, action);
    });

    it('should set the employee being edited to the person passed in on action', () => {
      expect(state.deductionsPreview.employeeBeingEdited.firstName).toEqual(person.firstName);
      expect(state.deductionsPreview.employeeBeingEdited.lastName).toEqual(person.lastName);
    });
  });
});
