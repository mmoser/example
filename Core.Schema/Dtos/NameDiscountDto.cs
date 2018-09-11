namespace Core.Schema.Dtos
{
	public class NameDiscountDto : DiscountDto
    {
			public string StartsWith { get; set; }
			public decimal Percent { get; set; }
    }
}
