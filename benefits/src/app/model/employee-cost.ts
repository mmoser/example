import { IEmployee } from "./employee";

export interface IEmployeeCost {
  employee: IEmployee,
  totalCost: number,
  employeeCost: number,
  dependentCost: number,
  totalCostPerPaycheck: number,
  paycheckAmountAfterDeduction: number,
  grossPaycheck: number
}
