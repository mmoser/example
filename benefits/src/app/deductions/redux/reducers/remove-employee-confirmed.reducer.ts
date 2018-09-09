import { IDeductionsState } from "../deductions.state";
import { IEmployee } from "../../../model/employee";
import { IEmployeeCost } from "../../../model/employee-cost";

export function reduceRemoveEmployeeConfirmed(state: IDeductionsState, action) {
  const employeeToRemove = state.deductionsPreview.employeeToBeDeleted;

  const employeeCosts = Array<IEmployeeCost>();
  let totalEmployeeCost = 0;
  let totalDependentCost = 0;
  let totalGrossPaycheck = 0;
  let totalCostPerPaycheck = 0;

  state.deductionsPreview.employeeCosts.forEach(x => {
    if (x !== employeeToRemove) {
      employeeCosts.push(x);
      totalEmployeeCost += x.employeeCost;
      totalDependentCost += x.dependentCost;
      totalGrossPaycheck += x.grossPaycheck;
      totalCostPerPaycheck += x.totalCostPerPaycheck;
    }
  });

  const totalCostPerYear = totalEmployeeCost + totalDependentCost;
  const totalPaycheckAfterDeduction = totalGrossPaycheck - totalCostPerPaycheck;

  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeCosts: employeeCosts,
    totalEmployeeCost: totalEmployeeCost,
    totalDependentCost: totalDependentCost,
    totalCostPerYear: totalCostPerYear,
    totalGrossPaycheck: totalGrossPaycheck,
    totalCostPerPaycheck: totalCostPerPaycheck,
    totalPaycheckAfterDeduction: totalPaycheckAfterDeduction,
    employeeToBeDeleted: null
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
