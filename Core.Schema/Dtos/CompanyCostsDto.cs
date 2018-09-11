using System.Collections.Generic;

namespace Core.Schema.Dtos
{
	public class CompanyCostsDto
	{
		public decimal EmployeeCost { get; set; }
		public decimal DependentCost { get; set; }
		public int NumberOfPaychecks { get; set; }
		public IEnumerable<DiscountDto> Discounts { get; set; }
	}
}
