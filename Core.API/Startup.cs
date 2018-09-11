using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Core.API
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors();
			ContainerConfigurator.RegisterServices(services, Configuration);
			services.AddMvc();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			var corsSection = Configuration.GetSection("Cors");
			var allowedOrigins = corsSection["AllowedOrigins"];

			app.UseCors(builder => builder
				.WithOrigins(allowedOrigins.Split(','))
				.AllowAnyMethod()
				.AllowAnyHeader()
			);

			app.UseMvc();
		}
	}
}
