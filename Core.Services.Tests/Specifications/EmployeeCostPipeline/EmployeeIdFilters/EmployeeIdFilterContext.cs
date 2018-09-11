using Core.Services.EmployeeCostPipeline;
using Platform.TestHelpers;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.EmployeeIdFilters
{
	public class EmployeeIdFilterContext : SpecificationContext
	{
		public EmployeeIdFilter FilterUnderTest { get; set; }

		protected override void Context()
		{
			base.Context();
			FilterUnderTest = new EmployeeIdFilter();
		}
	}
}
