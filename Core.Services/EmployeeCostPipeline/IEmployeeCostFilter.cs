using Core.Schema.Dtos;
using Core.Schema.Dtos.BenefitsCost;

namespace Core.Services.EmployeeCostPipeline
{
	public interface IEmployeeCostFilter
	{
		void Run(EmployeeCostDto employeeCost, CompanyCostsDto companyCosts);
	}
}
