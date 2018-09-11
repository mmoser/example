using Core.Model;
using Core.Services.EmployeeCostPipeline;
using Microsoft.Extensions.Logging;
using Moq;
using Platform.TestHelpers;

namespace Core.Services.Tests.Specifications.BenefitsCostServices
{
	public class BenefitsCostServiceContext : SpecificationContext
	{
		protected Mock<ILogger<BenefitsCostService>> LoggerMock { get; private set; }
		protected Mock<IBenefitsRepository> BenefitsRepositoryMock { get; private set; }
		protected Mock<IEmployeeCostPipe> EmployeeCostPipeMock { get; private set; }
		protected BenefitsCostService ServiceUnderTest { get; set; }

		protected override void Context()
		{
			base.Context();
			LoggerMock = new Mock<ILogger<BenefitsCostService>>();
			BenefitsRepositoryMock = new Mock<IBenefitsRepository>();
			EmployeeCostPipeMock = new Mock<IEmployeeCostPipe>();
			ServiceUnderTest = new BenefitsCostService(LoggerMock.Object, BenefitsRepositoryMock.Object, EmployeeCostPipeMock.Object);
		}
	}
}
