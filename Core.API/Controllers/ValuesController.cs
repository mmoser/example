using System.Collections.Generic;
using System.Linq;
using Core.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NLog;

namespace Core.API.Controllers
{
	[Route("api/[controller]")]
    public class ValuesController : Controller
    {
		private readonly IBenefitsRepository _benefitsRepository;
		private readonly ILogger<ValuesController> _logger;

		public ValuesController(IBenefitsRepository benefitsRepository, ILogger<ValuesController> logger)
		{
			_benefitsRepository = benefitsRepository;
			_logger = logger;
		}

		// GET api/values
		[HttpGet]
		public IActionResult Get()
		{
			_logger.LogInformation("Test");
			return Ok(_benefitsRepository.GetCompanyCosts(1));
			//return new string[] { "value1", "value2" };
		}

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
