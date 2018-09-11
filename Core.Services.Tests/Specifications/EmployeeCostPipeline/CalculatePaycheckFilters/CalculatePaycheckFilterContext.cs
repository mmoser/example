using Core.Services.EmployeeCostPipeline;
using Platform.TestHelpers;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.CalculatePaycheckFilters
{
	public class CalculatePaycheckFilterContext : SpecificationContext
	{
		protected CalculatePaycheckFilter FilterUnderTest { get; private set; }

		protected override void Context()
		{
			base.Context();
			FilterUnderTest = new CalculatePaycheckFilter();
		}
	}
}
