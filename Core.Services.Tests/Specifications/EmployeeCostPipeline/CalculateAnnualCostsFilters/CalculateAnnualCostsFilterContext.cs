using Core.Services.Discounts;
using Core.Services.EmployeeCostPipeline;
using Moq;
using Platform.TestHelpers;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.CalculateAnnualCostsFilters
{
	public class CalculateAnnualCostsFilterContext : SpecificationContext
	{
		protected Mock<IPersonDiscountFactory> PersonDiscountFactoryMock { get; private set; }
		protected CalculateAnnualCostsFilter FilterUnderTest { get; private set; }

		protected override void Context()
		{
			PersonDiscountFactoryMock = new Mock<IPersonDiscountFactory>();
			FilterUnderTest = new CalculateAnnualCostsFilter(PersonDiscountFactoryMock.Object);
		}
	}
}
