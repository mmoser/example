import { IDeductionsState, initialDeductionsState } from "../deductions.state";
import { IEmployee } from "../../../model/employee";
import { reduceAddDependent } from "./add-dependent.reducer";

describe('reduceAddDependent', () => {
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
    payload: {}
  };

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceAddDependent(previousState as IDeductionsState, action);
    });

    it('should add new empty dependent to the dependents array', () => {
      expect(state.deductionsPreview.employeeBeingEdited.dependents.length).toEqual(3);
      expect(state.deductionsPreview.employeeBeingEdited.dependents[2].firstName).toEqual('');
    });
  });
});
