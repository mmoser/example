using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.EmployeeIdFilters
{
	public class WhenIdIsEmpty : EmployeeIdFilterContext
	{
		[Test]
		public void ShouldSetId()
		{
			Assert.IsFalse(string.IsNullOrWhiteSpace(_employeeCost.Employee.Id));
		}

		private EmployeeCostDto _employeeCost;
		private CompanyCostsDto _companyCosts;

		protected override void Because()
		{
			FilterUnderTest.Run(_employeeCost, _companyCosts);
		}

		protected override void Context()
		{
			base.Context();
			_employeeCost = new EmployeeCostDto()
			{
				Employee = new EmployeeDto()
				{
					Id = string.Empty,
				}
			};

			_companyCosts = new CompanyCostsDto();
		}
	}
}
