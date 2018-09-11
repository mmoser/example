using System.Collections.Generic;
using System.Linq;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using Core.Services.Discounts;
using Moq;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.CalculateAnnualCostsFilters
{
	public class WhenRunningWithDiscounts : CalculateAnnualCostsFilterContext
	{
		[Test]
		public void ShouldAddDiscountsFromFactory()
		{
			PersonDiscountFactoryMock.Verify(x => x.AddDiscount(It.IsAny<IList<IPersonDiscount>>(), _companyCosts.Discounts.First()));
		}

		[Test]
		public void ShouldCallDiscountForEmployee()
		{
			_mockDiscount.Verify(x => x.GetDiscount(_employeeCost.Employee, _companyCosts.EmployeeCost));
		}

		[Test]
		public void ShouldCallToGetDiscountForDependents()
		{
			_mockDiscount.Verify(x => x.GetDiscount(_employeeCost.Employee.Dependents.First(), _companyCosts.DependentCost));
			_mockDiscount.Verify(x => x.GetDiscount(_employeeCost.Employee.Dependents[1], _companyCosts.DependentCost));

		}

		[Test]
		public void ShouldCalculateCorrectEmployeeCost()
		{
			Assert.AreEqual(_expectedEmployeeCost, _employeeCost.EmployeeCost);
		}

		[Test]
		public void ShouldCalculateCorrectDependentCost()
		{
			Assert.AreEqual(_expectedDependentCost, _employeeCost.DependentCost);
		}

		[Test]
		public void ShouldCalculateCorrectTotalCost()
		{
			Assert.AreEqual(_expectedDependentCost + _expectedEmployeeCost, _employeeCost.TotalCost);
		}

		private EmployeeCostDto _employeeCost;
		private CompanyCostsDto _companyCosts;
		private Mock<IPersonDiscount> _mockDiscount;
		private decimal _expectedEmployeeCost;
		private decimal _expectedDependentCost;

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
					FirstName = "Anne",
					LastName = "Barber",
					Dependents = new List<DependentDto>()
					{
						new DependentDto()
						{
							FirstName = "Alex",
							LastName = "Barber"
						},
						new DependentDto()
						{
							FirstName = "Foo",
							LastName = "Barber"
						}
					}
				}
			};

			_companyCosts = new CompanyCostsDto()
			{
				EmployeeCost = 1000m,
				DependentCost = 500m,
				Discounts = new List<DiscountDto>()
				{
					new NameDiscountDto()
					{
						StartsWith = "A",
						Percent = 10m,
						AppliedToEmployee = true,
						AppliedToDependent = true
					}
				}
			};

			_expectedEmployeeCost = 900m;
			_expectedDependentCost = 950m;

			_mockDiscount = new Mock<IPersonDiscount>();
			_mockDiscount.SetupGet(x => x.AppliedToEmployee).Returns(true);
			_mockDiscount.SetupGet(x => x.AppliedToDependent).Returns(true);
			_mockDiscount.Setup(x => x.GetDiscount(_employeeCost.Employee, _companyCosts.EmployeeCost)).Returns(100m);
			_mockDiscount.Setup(x => x.GetDiscount(_employeeCost.Employee.Dependents.First(), _companyCosts.DependentCost)).Returns(50m);
			_mockDiscount.Setup(x => x.GetDiscount(_employeeCost.Employee.Dependents[1], _companyCosts.DependentCost)).Returns(0);

			PersonDiscountFactoryMock
				.Setup(x => x.AddDiscount(It.IsAny<IList<IPersonDiscount>>(), _companyCosts.Discounts.First()))
				.Callback((IList<IPersonDiscount> discounts, DiscountDto discount) => { discounts.Add(_mockDiscount.Object); })
				;
		}
	}
}
