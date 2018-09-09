import { reduceRemoveEmployeeRequested } from "./remove-employee-requested.reducer";
import { IDeductionsState } from "../deductions.state";

describe('reduceRemoveEmployeeRequested', () => {
  const initialState = {
    deductionsPreview: {
      employeeToBeDeleted: null
    }
  };

  const action = {
    payload: {
      employeeCost: {
        employee: {
          firstName: 'Foo'
        }
      }
    }
  }

  describe('when called when employeeToBeDeleted is null', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceRemoveEmployeeRequested(initialState as IDeductionsState, action);
    });

    it('should set the employee to be deleted to the employee cost passed in on action', () => {
      expect(state.deductionsPreview.employeeToBeDeleted.employee.firstName).toEqual(action.payload.employeeCost.employee.firstName);
    });
  });

  describe('when called when employeeToBeDeleted is set to another employee', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      let newState = Object.assign({}, initialState, {
        deductionsPreview: {
          employeeToBeDeleted: {
            employee: { firstName: 'Bar' }
          }
        }
      });
      state = reduceRemoveEmployeeRequested(newState as IDeductionsState, action);
    });

    it('should set the employee to be deleted to the employee cost passed in on action', () => {
      expect(state.deductionsPreview.employeeToBeDeleted.employee.firstName).toEqual(action.payload.employeeCost.employee.firstName);
    });
  });

});
