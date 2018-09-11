using System;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.EmployeeIdFilters
{
	public class WhenIdIsNotEmpty : EmployeeIdFilterContext
	{
		[Test]
		public void ShouldKeepSameIdThatWasPassedIn()
		{
			Assert.AreSame(_employeeId, _employeeCost.Employee.Id);
		}

		private EmployeeCostDto _employeeCost;
		private CompanyCostsDto _companyCosts;
		private string _employeeId;

		protected override void Because()
		{
			FilterUnderTest.Run(_employeeCost, _companyCosts);
		}

		protected override void Context()
		{
			base.Context();
			_employeeId = Guid.NewGuid().ToString();
			_employeeCost = new EmployeeCostDto()
			{
				Employee = new EmployeeDto()
				{
					Id = _employeeId,
				}
			};

			_companyCosts = new CompanyCostsDto();
		}
	}
}
