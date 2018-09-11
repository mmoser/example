using Core.Services.Discounts;
using Platform.TestHelpers;

namespace Core.Services.Tests.Specifications.Discounts.FirstNameDiscounts
{
	public class FirstNameDiscountContext : SpecificationContext
	{
		protected string StartsWith { get; private set; }
		protected FirstNameDiscount DiscountUnderTest { get; private set; }
		protected decimal Percent { get; private set; }
		protected bool IgnoreCase { get; set; }

		protected override void Context()
		{
			base.Context();
			StartsWith = "A";
			Percent = 10m;
			IgnoreCase = true;

			DiscountUnderTest = new FirstNameDiscount(StartsWith, Percent, IgnoreCase, true, true);
		}

	}
}
