using Core.Model.Entities;
using Core.Schema.Dtos;
using System;
using System.Linq;

namespace Core.Model
{
	public interface IBenefitsRepository
	{
		CompanyCostsDto GetCompanyCosts(int companyId);
	}

	public partial class BenefitsContext : IBenefitsRepository
	{
		public CompanyCostsDto GetCompanyCosts(int companyId)
		{
			var date = DateTime.Now;
			var query = from c in Companies
									let activeBenefitsCost = c.Benefits.FirstOrDefault(x => x.StartDate <= date && (!x.EndDate.HasValue || x.EndDate.Value >= date))
									where c.CompanyId == companyId
									select new CompanyCostsDto()
									{
										DependentCost = activeBenefitsCost.DependentCost,
										EmployeeCost = activeBenefitsCost.EmployeeCost,
										NumberOfPaychecks = activeBenefitsCost.NumberOfPaychecks,
										Discounts = c.Discounts
											.Where(x => x.StartDate <= date && (!x.EndDate.HasValue || x.EndDate.Value >= date) && x is NameDiscount)
											.Select(x => x as NameDiscount)
											.Select(x =>
													new NameDiscountDto()
													{
														AppliedToDependent = x.AppliedToDependent,
														AppliedToEmployee = x.AppliedToEmployee,
														Percent = x.Percent,
														StartsWith = x.StartsWith
													})

									};
			return query.FirstOrDefault();
		} 
	}
}
