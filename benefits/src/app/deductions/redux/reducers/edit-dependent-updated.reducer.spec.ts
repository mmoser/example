import { IDeductionsState, initialDeductionsState } from "../deductions.state";
import { IEmployee } from "../../../model/employee";
import { reduceEditDependentUpdated } from './edit-dependent-updated.reducer';

describe('reduceEditDependentUpdated', () => {
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

  const person = { firstName: 'Anne', lastName: 'Barber' };

  const action = {
    payload: { person: person, index: 0 }
  };

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceEditDependentUpdated(previousState as IDeductionsState, action);
    });

    it('should change the fields on the dependent with the index passed in', () => {
      const dependent = state.deductionsPreview.employeeBeingEdited.dependents[action.payload.index];
      expect(dependent.firstName).toEqual(person.firstName);
      expect(dependent.lastName).toEqual(person.lastName);
    });
  });
});
