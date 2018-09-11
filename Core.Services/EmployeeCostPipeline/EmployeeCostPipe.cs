using System.Collections.Generic;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;

namespace Core.Services.EmployeeCostPipeline
{
	public interface IEmployeeCostPipe
	{
		void RegisterFilters(IEmployeeCostFilter employeeCostFilter);
		EmployeeCostDto GetEmployeeCost(EmployeeDto employee, CompanyCostsDto companyCosts);
	}

	public class EmployeeCostPipe : IEmployeeCostPipe
	{
		private readonly IList<IEmployeeCostFilter> _filters = new List<IEmployeeCostFilter>();

		public void RegisterFilters(IEmployeeCostFilter employeeCostFilter)
		{
			_filters.Add(employeeCostFilter);
		}

		public EmployeeCostDto GetEmployeeCost(EmployeeDto employee, CompanyCostsDto companyCosts)
		{
			var employeeCost = new EmployeeCostDto()
			{
				Employee = employee
			};

			foreach (var employeeCostFilter in _filters)
			{
				employeeCostFilter.Run(employeeCost, companyCosts);
			}

			return employeeCost;
		} 
	}

}
