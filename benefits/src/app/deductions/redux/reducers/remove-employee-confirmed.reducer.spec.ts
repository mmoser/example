import { reduceRemoveEmployeeConfirmed } from "./remove-employee-confirmed.reducer";
import { IDeductionsState } from "../deductions.state";

describe('reduceRemoveEmployeeConfirmed', () => {
  const employeeToBeRemoved = {
    employee: {
      firstName: 'Foo',
      lastName: 'Bar',
      dependents: [
        { firstName: 'Anne', lastName: 'Bar' },
        { firstName: 'Bob', lastName: 'Bar' },
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
        employeeToBeRemoved,
        {
          employee: {
            firstName: 'Tom',
            lastName: 'Wilford',
            dependents: [
              { firstName: 'Anne', lastName: 'Wilford' },
              { firstName: 'Bob', lastName: 'Wilford' },
            ]
          },
          grossPaycheck: 2000,
          paycheckAmountAfterDeduction: 1925,
          totalCostPerPaycheck: 75,
          dependentCost: 950,
          employeeCost: 1000,
          totalCost: 1950
        },
        {
          employee: {
            firstName: 'Amy',
            lastName: 'Thomas',
            dependents: [
              { firstName: 'Anne', lastName: 'Thomas' },
              { firstName: 'Bob', lastName: 'Barker' },
            ]
          },
          grossPaycheck: 2000,
          paycheckAmountAfterDeduction: 1928.85,
          totalCostPerPaycheck: 71.15,
          dependentCost: 950,
          employeeCost: 900,
          totalCost: 1850
        },
        {
          employee: {
            firstName: 'Roy',
            lastName: 'Anderson',
            dependents: null
          },
          grossPaycheck: 2000,
          paycheckAmountAfterDeduction: 1961.54,
          totalCostPerPaycheck: 38.46,
          dependentCost: 0,
          employeeCost: 1000,
          totalCost: 1000
        },
      ],
      employeeToBeDeleted: employeeToBeRemoved
    }
  };

  const action = {}

  describe('when called', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceRemoveEmployeeConfirmed(initialState as IDeductionsState, action);
    });

    it('should remove the employee out of employee costs', () => {
      state.deductionsPreview.employeeCosts.forEach(x => {
        expect(x.employee.firstName).not.toEqual(employeeToBeRemoved.employee.firstName);
      });
    });

    it('should set the employee to be deleted to null', () => {
      expect(state.deductionsPreview.employeeToBeDeleted).toBeNull();
    });

    it('should set the total employee costs', () => {
      expect(state.deductionsPreview.totalEmployeeCost).toEqual(2900);
    });

    it('should set the total dependent cost', () => {
      expect(state.deductionsPreview.totalDependentCost).toEqual(1900);
    });

    it('should set the total cost per year', () => {
      expect(state.deductionsPreview.totalCostPerYear).toEqual(4800);
    });

    it('should set the total gross paycheck', () => {
      expect(state.deductionsPreview.totalGrossPaycheck).toEqual(6000);
    });

    it('should set the total cost per paycheck', () => {
      expect(state.deductionsPreview.totalCostPerPaycheck).toEqual(184.61);
    });

    it('should set the total paycheck after deductions', () => {
      expect(state.deductionsPreview.totalPaycheckAfterDeduction).toEqual(state.deductionsPreview.totalGrossPaycheck - 184.61);
    });
  });
});
