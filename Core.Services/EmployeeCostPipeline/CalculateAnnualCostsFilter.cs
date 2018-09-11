using System.Collections.Generic;
using System.Linq;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using Core.Schema.Interfaces;
using Core.Services.Discounts;

namespace Core.Services.EmployeeCostPipeline
{
	public class CalculateAnnualCostsFilter : IEmployeeCostFilter
	{
		private readonly IPersonDiscountFactory _personDiscountFactory;

		public CalculateAnnualCostsFilter(IPersonDiscountFactory personDiscountFactory)
		{
			_personDiscountFactory = personDiscountFactory;
		}

		public void Run(EmployeeCostDto employeeCost, CompanyCostsDto companyCosts)
		{
			var personDiscounts = new List<IPersonDiscount>();
			foreach (var companyCostsDiscount in companyCosts.Discounts)
			{
				_personDiscountFactory.AddDiscount(personDiscounts, companyCostsDiscount);
			}

			employeeCost.EmployeeCost = CalculateEmployeeCosts(employeeCost, companyCosts, personDiscounts);
			employeeCost.DependentCost = CalculateDependentCosts(employeeCost, companyCosts, personDiscounts);
			employeeCost.TotalCost = employeeCost.EmployeeCost + employeeCost.DependentCost;
		}

		private decimal CalculateEmployeeCosts(EmployeeCostDto employeeCost, CompanyCostsDto companyCosts, List<IPersonDiscount> personDiscounts)
		{
			var employeeDiscounts = personDiscounts.Where(x => x.AppliedToEmployee).ToList();
			var person = employeeCost.Employee;
			var cost = companyCosts.EmployeeCost;
			var totalDiscount = GetTotalDiscount(person, cost, employeeDiscounts);
			return cost - totalDiscount;
		}

		private decimal CalculateDependentCosts(EmployeeCostDto employeeCost, CompanyCostsDto companyCosts, List<IPersonDiscount> personDiscounts)
		{
			var dependentDiscounts = personDiscounts.Where(x => x.AppliedToDependent).ToList();
			var totalCost = 0m;
			var totalDiscount = 0m;
			var cost = companyCosts.DependentCost;
			foreach (var person in employeeCost.Employee.Dependents)
			{
				totalCost += cost;
				totalDiscount += GetTotalDiscount(person, cost, dependentDiscounts);
			}

			return totalCost - totalDiscount;
		}

		private decimal GetTotalDiscount(IPerson person, decimal originalCost, IEnumerable<IPersonDiscount> personDiscounts)
		{
			return personDiscounts.Sum(personDiscount => personDiscount.GetDiscount(person, originalCost));
		}
	}
}
