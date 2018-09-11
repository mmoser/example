using Core.Model;
using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;
using Core.Services.EmployeeCostPipeline;
using Microsoft.Extensions.Logging;

namespace Core.Services
{
	public interface IBenefitsCostService
	{
		EmployeeCostDto GetEmployeeCost(int companyId, EmployeeDto employeeDto);
	}

	public class BenefitsCostService : IBenefitsCostService
	{
		private readonly ILogger<BenefitsCostService> _logger;
		private readonly IBenefitsRepository _benefitsRepository;
		private readonly IEmployeeCostPipe _employeeCostPipe;

		public BenefitsCostService(ILogger<BenefitsCostService> logger, IBenefitsRepository benefitsRepository, IEmployeeCostPipe employeeCostPipe)
		{
			_logger = logger;
			_benefitsRepository = benefitsRepository;
			_employeeCostPipe = employeeCostPipe;
		}

		public EmployeeCostDto GetEmployeeCost(int companyId, EmployeeDto employeeDto)
		{
			_logger.LogInformation("Getting company costs from the repository");
			var companyCosts = _benefitsRepository.GetCompanyCosts(companyId);

			_logger.LogInformation("Getting employee costs pipeline");
			var employeeCost = _employeeCostPipe.GetEmployeeCost(employeeDto, companyCosts);
			return employeeCost;
		}
	}
}
