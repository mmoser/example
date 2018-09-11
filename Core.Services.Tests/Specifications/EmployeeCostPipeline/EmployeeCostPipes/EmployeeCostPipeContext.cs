using Core.Services.EmployeeCostPipeline;
using Platform.TestHelpers;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.EmployeeCostPipes
{
	public class EmployeeCostPipeContext : SpecificationContext
	{
		protected EmployeeCostPipe PipeUnderTest { get; private set; }

		protected override void Context()
		{
			base.Context();
			PipeUnderTest = new EmployeeCostPipe();
		}
	}
}
