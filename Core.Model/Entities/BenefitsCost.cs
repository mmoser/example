using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Model.Entities
{
	public class BenefitsCost
	{
		public int BenefitsCostId { get; set; }
		public int CompanyId { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime? EndDate { get; set; }
		[Column(TypeName = "decimal(19,4)")]
		public decimal EmployeeCost { get; set; }
		[Column(TypeName = "decimal(19,4)")]
		public decimal DependentCost { get; set; }
		public int NumberOfPaychecks { get; set; }

		public Company Company { get; set; }
	}
}
