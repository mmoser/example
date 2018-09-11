import { IDeductionsPreview } from "../../model/deductions-preview";

export interface IDeductionsState {
  deductionsPreview: IDeductionsPreview
}

export const initialDeductionsState = {
  deductionsPreview: {
    employeeCosts: [],
    totalEmployeeCost: 0,
    totalDependentCost: 0,
    totalCostPerYear: 0,
    totalGrossPaycheck: 0,
    totalCostPerPaycheck: 0,
    totalPaycheckAfterDeduction: 0,
    employeeToBeDeleted: null,
    employeeBeingEdited: { firstName: '', lastName: '', dependents: [] }
  }
} as IDeductionsState;

//export const initialDeductionsState = {
//  deductionsPreview: {
//    employeeCosts: [
//      {
//        employee: {
//          firstName: 'Tom',
//          lastName: 'Wilford',
//          dependents: [
//            { firstName: 'Anne', lastName: 'Wilford' },
//            { firstName: 'Bob', lastName: 'Wilford' },
//          ]
//        },
//        grossPaycheck: 2000,
//        paycheckAmountAfterDeduction: 1925,
//        totalCostPerPaycheck: 75,
//        dependentCost: 950,
//        employeeCost: 1000,
//        totalCost: 1950
//      },
//      {
//        employee: {
//          firstName: 'Amy',
//          lastName: 'Thomas',
//          dependents: [
//            { firstName: 'Anne', lastName: 'Thomas' },
//            { firstName: 'Bob', lastName: 'Barker' },
//          ]
//        },
//        grossPaycheck: 2000,
//        paycheckAmountAfterDeduction: 1928.85,
//        totalCostPerPaycheck: 71.15,
//        dependentCost: 950,
//        employeeCost: 900,
//        totalCost: 1850
//      },
//      {
//        employee: {
//          firstName: 'Roy',
//          lastName: 'Anderson',
//          dependents: null
//        },
//        grossPaycheck: 2000,
//        paycheckAmountAfterDeduction: 1961.54,
//        totalCostPerPaycheck: 38.46,
//        dependentCost: 0,
//        employeeCost: 1000,
//        totalCost: 1000
//      },
//    ],
//    totalEmployeeCost: 2900,
//    totalDependentCost: 1900,
//    totalCostPerYear: 4800,
//    totalGrossPaycheck: 6000,
//    totalCostPerPaycheck: 184.61,
//    totalPaycheckAfterDeduction: 5815.39,
//    employeeToBeDeleted: null,
//    employeeBeingEdited: { firstName: '', lastName: '', dependents: [] }
//  }
//} as IDeductionsState;
