import { IEmployeeCost } from "./employee-cost";
import { IEmployee } from "./employee";

export interface IDeductionsPreview {
  employeeCosts: Array<IEmployeeCost>,
  totalEmployeeCost: number,
  totalDependentCost: number,
  totalCostPerYear: number,
  totalCostPerPaycheck: number,
  totalPaycheckAfterDeduction: number,
  totalGrossPaycheck: number,
  employeeToBeDeleted: IEmployeeCost,
  employeeBeingEdited: IEmployee
}
