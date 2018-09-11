using System;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;

namespace Core.Services.EmployeeCostPipeline
{
	public class EmployeeIdFilter : IEmployeeCostFilter
	{
		public void Run(EmployeeCostDto employeeCost, CompanyCostsDto companyCosts)
		{
			if (string.IsNullOrWhiteSpace(employeeCost.Employee.Id))
			{
				employeeCost.Employee.Id = Guid.NewGuid().ToString();
			}
		}
	}
}
