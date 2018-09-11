using Core.Schema.Dtos.BenefitsCost;
using Core.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;

namespace Core.API.Controllers
{
	[Route("api/[controller]")]
	public class BenefitsCostController : Controller
	{
		private readonly ILogger<BenefitsCostController> _logger;
		private readonly IBenefitsCostService _benefitsCostService;

		public BenefitsCostController(ILogger<BenefitsCostController> logger, IBenefitsCostService benefitsCostService)
		{
			_logger = logger;
			_benefitsCostService = benefitsCostService;
		}

		[HttpPost("employeecost")]
		public IActionResult EmployeeCost([FromBody] EmployeeCostPostDto post)
		{
			try
			{
				var employeeCost = _benefitsCostService.GetEmployeeCost(post.CompanyId, post.Employee);
				return Ok(employeeCost);
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Failed to get the benefits cost");
				return StatusCode((int)HttpStatusCode.InternalServerError, "Failed to get the benefits cost. Please try again.");
			}
		}
	}
}
