using Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Core.API
{
	public static class ContainerConfigurator
	{
		public static void RegisterServices(IServiceCollection services, IConfiguration configuration)
		{
			RegisterRepositories(services, configuration);
		}

		private static void RegisterRepositories(IServiceCollection services, IConfiguration configuration)
		{
			var connection = configuration.GetConnectionString("BenefitsConnection");
			services.AddDbContext<BenefitsContext>(builder => builder.UseSqlServer(connection));
		}
	}
}
