namespace Core.Schema.Dtos.BenefitsCost
{
	public class EmployeeCostDto
	{
		public EmployeeDto Employee { get; set; }
		public decimal TotalCost { get; set; }
		public decimal EmployeeCost { get; set; }
		public decimal DependentCost { get; set; }
		public decimal TotalCostPerPaycheck { get; set; }
		public decimal PaycheckAmountAfterDeduction { get; set; }
		public decimal GrossPaycheck { get; set; }
	}
}
