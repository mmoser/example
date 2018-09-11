using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.BenefitsCostServices
{
	public class WhenGettingEmployeeCost : BenefitsCostServiceContext
	{
		[Test]
		public void ShouldGetCompanyCostsFromRepository()
		{
			BenefitsRepositoryMock.Verify(x => x.GetCompanyCosts(_companyId));
		}

		[Test]
		public void ShouldGetEmployeeCostsFromPipe()
		{
			EmployeeCostPipeMock.Verify(x => x.GetEmployeeCost(_employeeDto, _companyCosts));
		}

		[Test]
		public void ShouldReturnEmployeeCostThatIsReturnedFromPipe()
		{
			Assert.AreEqual(_employeeCost, _result);
		}

		private EmployeeDto _employeeDto;
		private EmployeeCostDto _result;
		private int _companyId;
		private CompanyCostsDto _companyCosts;
		private EmployeeCostDto _employeeCost;

		protected override void Because()
		{
			_result = ServiceUnderTest.GetEmployeeCost(_companyId, _employeeDto);
		}

		protected override void Context()
		{
			base.Context();
			_companyId = 1;
			_employeeDto = new EmployeeDto();
			_companyCosts = new CompanyCostsDto();
			_employeeCost = new EmployeeCostDto();

			BenefitsRepositoryMock.Setup(x => x.GetCompanyCosts(_companyId)).Returns(_companyCosts);
			EmployeeCostPipeMock.Setup(x => x.GetEmployeeCost(_employeeDto, _companyCosts)).Returns(_employeeCost);
		}
	}
}
