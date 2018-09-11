using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.CalculatePaycheckFilters
{
	public class WhenRunning : CalculatePaycheckFilterContext
	{
		[Test]
		public void ShouldCalculateTotalCostPerPaycheck()
		{
			Assert.AreEqual(_expectedTotalCostPerPaycheck, _employeeCost.TotalCostPerPaycheck);
		}

		[Test]
		public void ShouldSetGrossPaycheck()
		{
			Assert.AreEqual(_expectedGrossPaycheck, _employeeCost.GrossPaycheck);
		}

		[Test]
		public void ShouldCalculatePaycheckAmountAfterDeduction()
		{
			Assert.AreEqual(_expectedPaycheckAmountAfterDeduction, _employeeCost.PaycheckAmountAfterDeduction);
		}

		private EmployeeCostDto _employeeCost;
		private CompanyCostsDto _companyCosts;
		private decimal _expectedTotalCostPerPaycheck;
		private decimal _expectedPaycheckAmountAfterDeduction;
		private decimal _expectedGrossPaycheck;

		protected override void Because()
		{
			FilterUnderTest.Run(_employeeCost, _companyCosts);
		}

		protected override void Context()
		{
			base.Context();
			_employeeCost = new EmployeeCostDto()
			{
				EmployeeCost = 900m,
				DependentCost = 950m,
				TotalCost = 1850m
			};

			_companyCosts = new CompanyCostsDto()
			{
				NumberOfPaychecks = 26
			};

			_expectedTotalCostPerPaycheck = _employeeCost.TotalCost / _companyCosts.NumberOfPaychecks;
			_expectedGrossPaycheck = 2000m;
			_expectedPaycheckAmountAfterDeduction = _expectedGrossPaycheck - _expectedTotalCostPerPaycheck;
		}
	}
}
