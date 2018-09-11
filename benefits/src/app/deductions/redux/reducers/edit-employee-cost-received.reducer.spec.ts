import { IDeductionsState } from "../deductions.state";
import { reduceEditEmployeeCostReceived } from './edit-employee-cost-received.reducer';

describe('reduceEditEmployeeCostReceived', () => {
  const employeeBeingEdited = {
    employee: {
      id: 'something',
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
        employeeBeingEdited,
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
      employeeBeingEdited: employeeBeingEdited.employee
    }
  };

  const updatedEmployeeCost = {
    employee: {
      id: 'something',
      firstName: 'Foo',
      lastName: 'Bar',
      dependents: [
        { firstName: 'Anne', lastName: 'Bar' },
        { firstName: 'Bob', lastName: 'Bar' },
        { firstName: 'Tom', lastName: 'Bar' },
      ]
    },
    grossPaycheck: 2000,
    paycheckAmountAfterDeduction: 1905.77,
    totalCostPerPaycheck: 94.23,
    dependentCost: 1450,
    employeeCost: 1000,
    totalCost: 2450
  };

  const action = {
    payload: { employeeCost: updatedEmployeeCost }
  };

  describe('when called and the employee is being updated', () => {
    let state: IDeductionsState;
    beforeAll(() => {
      state = reduceEditEmployeeCostReceived(initialState as IDeductionsState, action);
    });

    it('should set the employee being edited to null', () => {
      expect(state.deductionsPreview.employeeBeingEdited).toBeNull();
    });

    it('should set the total employee costs', () => {
      expect(state.deductionsPreview.totalEmployeeCost).toEqual(2000);
    });

    it('should set the total dependent cost', () => {
      expect(state.deductionsPreview.totalDependentCost).toEqual(1450);
    });

    it('should set the total cost per year', () => {
      expect(state.deductionsPreview.totalCostPerYear).toEqual(3450);
    });

    it('should set the total gross paycheck', () => {
      expect(state.deductionsPreview.totalGrossPaycheck).toEqual(4000);
    });

    it('should set the total cost per paycheck', () => {
      expect(state.deductionsPreview.totalCostPerPaycheck).toEqual(132.69);
    });

    it('should set the total paycheck after deductions', () => {
      expect(state.deductionsPreview.totalPaycheckAfterDeduction).toEqual(state.deductionsPreview.totalGrossPaycheck - 132.69);
    });
  });
});
