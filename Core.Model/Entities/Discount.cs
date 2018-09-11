using System;

namespace Core.Model.Entities
{
	public class Discount
	{
		public int DiscountId { get; set; }
		public int CompanyId { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime? EndDate { get; set; }
		public bool AppliedToEmployee { get; set; }
		public bool AppliedToDependent { get; set; }

		public Company Company { get; set; }
	}
}
