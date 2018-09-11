using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Model.Entities
{
	public class NameDiscount : Discount
  {
		[Column(TypeName = "decimal(5,2)")]
		public decimal Percent { get; set; }
		public string StartsWith { get; set; }
  }
}
