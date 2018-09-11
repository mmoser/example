using System.Collections.Generic;

namespace Core.Model.Entities
{
	public class Company
	{
		public int CompanyId { get; set; }
		public string Name { get; set; }

		public ICollection<BenefitsCost> Benefits { get; set; }
		public ICollection<Discount> Discounts { get; set; }
	}
}
