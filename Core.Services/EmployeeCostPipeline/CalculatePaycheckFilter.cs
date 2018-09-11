using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;

namespace Core.Services.EmployeeCostPipeline
{
	public class CalculatePaycheckFilter : IEmployeeCostFilter
	{
		public void Run(EmployeeCostDto employeeCost, CompanyCostsDto companyCosts)
		{
			employeeCost.TotalCostPerPaycheck = employeeCost.TotalCost / companyCosts.NumberOfPaychecks;
			employeeCost.GrossPaycheck = 2000m; // Note: If we ever make this be calculated by employee, we would want to include this on the employee.
			employeeCost.PaycheckAmountAfterDeduction = employeeCost.GrossPaycheck - employeeCost.TotalCostPerPaycheck;
		}
	}
}
