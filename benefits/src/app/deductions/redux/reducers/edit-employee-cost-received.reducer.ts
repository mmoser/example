import { IDeductionsState } from "../deductions.state";
import { IEmployeeCost } from "../../../model/employee-cost";

export function reduceEditEmployeeCostReceived(state: IDeductionsState, action) {
  const { payload } = action;
  const edited = !!state.deductionsPreview.employeeBeingEdited.id;

  const employeeCostsClone = state.deductionsPreview.employeeCosts.splice(0);

  if (edited) {
    const employeeCostIndex = employeeCostsClone.findIndex((value, index, obj) => {
      return value.employee.id === payload.employeeCost.employee.id;
    });

    employeeCostsClone.splice(employeeCostIndex, 1, payload.employeeCost);
  }
  else {
    employeeCostsClone.push(payload.employeeCost);
  }


  let totalEmployeeCost = 0;
  let totalDependentCost = 0;
  let totalGrossPaycheck = 0;
  let totalCostPerPaycheck = 0;

  employeeCostsClone.forEach(x => {
    totalEmployeeCost += x.employeeCost;
    totalDependentCost += x.dependentCost;
    totalGrossPaycheck += x.grossPaycheck;
    totalCostPerPaycheck += x.totalCostPerPaycheck;
  });

  const totalCostPerYear = totalEmployeeCost + totalDependentCost;
  const totalPaycheckAfterDeduction = totalGrossPaycheck - totalCostPerPaycheck;

  const deductionsPreview = Object.assign({}, state.deductionsPreview, {
    employeeCosts: employeeCostsClone,
    totalEmployeeCost: totalEmployeeCost,
    totalDependentCost: totalDependentCost,
    totalCostPerYear: totalCostPerYear,
    totalGrossPaycheck: totalGrossPaycheck,
    totalCostPerPaycheck: totalCostPerPaycheck,
    totalPaycheckAfterDeduction: totalPaycheckAfterDeduction,
    employeeBeingEdited: null
  });

  return Object.assign({}, state, {
    deductionsPreview: deductionsPreview
  });
}
