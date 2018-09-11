using Core.Model;
using Core.Services;
using Core.Services.Discounts;
using Core.Services.EmployeeCostPipeline;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Core.API
{
	public static class ContainerConfigurator
	{
		public static void RegisterServices(IServiceCollection services, IConfiguration configuration)
		{
			services.AddTransient<IBenefitsCostService, BenefitsCostService>();
			services.AddSingleton<IPersonDiscountFactory, PersonDiscountFactory>();
			services.AddTransient<EmployeeIdFilter>();
			services.AddTransient<CalculateAnnualCostsFilter>();
			services.AddTransient<CalculatePaycheckFilter>();

			services.AddTransient<IEmployeeCostPipe>(provider =>
			{
				var pipe = new EmployeeCostPipe();
				pipe.RegisterFilters(provider.GetService(typeof(EmployeeIdFilter)) as IEmployeeCostFilter);
				pipe.RegisterFilters(provider.GetService(typeof(CalculateAnnualCostsFilter)) as IEmployeeCostFilter);
				pipe.RegisterFilters(provider.GetService(typeof(CalculatePaycheckFilter)) as IEmployeeCostFilter);
				return pipe;
			});

			RegisterRepositories(services, configuration);
		}

		private static void RegisterRepositories(IServiceCollection services, IConfiguration configuration)
		{
			var connection = configuration.GetConnectionString("BenefitsConnection");
			services.AddDbContext<BenefitsContext>(builder => builder.UseSqlServer(connection));
			services.AddTransient<IBenefitsRepository, BenefitsContext>();
		}
	}
}
