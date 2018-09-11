using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using Core.Services.EmployeeCostPipeline;
using Moq;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.EmployeeCostPipeline.EmployeeCostPipes
{
	public class WhenCallingRun : EmployeeCostPipeContext
	{
		[Test]
		public void ShouldCallRunOnRegisteredFilters()
		{
			_employeeCostFilterMock.Verify(x => x.Run(It.Is<EmployeeCostDto>(dto => VerifyEmployeeCost(dto)), It.Is<CompanyCostsDto>(dto => VerifyCompanyCosts(dto))));
		}

		[Test]
		public void ShouldReturnEmployeeCosts()
		{
			Assert.AreSame(_result.Employee, _employee);
			Assert.IsNotNull(_result);
		}

		private bool VerifyEmployeeCost(EmployeeCostDto dto)
		{
			Assert.AreSame(dto.Employee, _employee);
			return true;
		}

		private bool VerifyCompanyCosts(CompanyCostsDto dto)
		{
			Assert.AreSame(dto, _companyCosts);
			return true;
		}

		private Mock<IEmployeeCostFilter> _employeeCostFilterMock;
		private EmployeeCostDto _result;
		private EmployeeDto _employee;
		private CompanyCostsDto _companyCosts;

		protected override void Because()
		{
			PipeUnderTest.RegisterFilters(_employeeCostFilterMock.Object);
			_result = PipeUnderTest.GetEmployeeCost(_employee, _companyCosts);
		}

		protected override void Context()
		{
			base.Context();
			_employeeCostFilterMock = new Mock<IEmployeeCostFilter>();
			_employee = new EmployeeDto();
			_companyCosts = new CompanyCostsDto();
		}
	}
}
