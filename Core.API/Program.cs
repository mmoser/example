using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using NLog.Web;

namespace Core.API
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var logger = NLog.Web.NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();
			try
			{
				logger.Debug("Initializing");
				BuildWebHost(args).Run();
			}
			catch (System.Exception ex)
			{
				logger.Error(ex, "Failed to run program");
				throw;
			}
			finally
			{
				NLog.LogManager.Shutdown();
			}
		}

		public static IWebHost BuildWebHost(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
				.UseStartup<Startup>()
				.ConfigureLogging(logging =>
				{
					logging.ClearProviders();
				})
				.UseNLog()
				.Build();
	}
}
