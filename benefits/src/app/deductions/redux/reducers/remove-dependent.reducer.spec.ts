import { IDeductionsState, initialDeductionsState } from "../deductions.state";
import { IEmployee } from "../../../model/employee";
import { reduceRemoveDependent } from "./remove-dependent.reducer";

describe('reduceRemoveDependent', () => {
  const employeeBeingEdited = {
    firstName: 'Foo',
    lastName: 'Bar',
    dependents: [
      { firstName: 'Anne', lastName: 'Bar' },
      { firstName: 'Sue', lastName: 'Bar' },
      { firstName: 'Bob', lastName: 'Bar' }
    ]
  } as IEmployee;

  const previousState = {
    deductionsPreview: {
      employeeBeingEdited: employeeBeingEdited
    }
  };

  const action = {
    payload: { index: 1 }
  };

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceRemoveDependent(previousState as IDeductionsState, action);
    });

    it('should remove dependent from index that is passed in the action', () => {
      expect(state.deductionsPreview.employeeBeingEdited.dependents.length).toEqual(2);
      expect(state.deductionsPreview.employeeBeingEdited.dependents[0].firstName).toEqual('Anne');
      expect(state.deductionsPreview.employeeBeingEdited.dependents[1].firstName).toEqual('Bob');
    });
  });
});
