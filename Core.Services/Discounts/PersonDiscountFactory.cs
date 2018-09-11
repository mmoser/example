using System.Collections.Generic;
using Core.Schema.Dtos;

namespace Core.Services.Discounts
{
	public interface IPersonDiscountFactory
	{
		void AddDiscount(IList<IPersonDiscount> discounts, DiscountDto discount);
	}

	public class PersonDiscountFactory : IPersonDiscountFactory
	{
		public void AddDiscount(IList<IPersonDiscount> discounts, DiscountDto discount)
		{
			if (discount is NameDiscountDto nameDiscount)
			{
				discounts.Add(new FirstNameDiscount(nameDiscount.StartsWith, nameDiscount.Percent, true, nameDiscount.AppliedToEmployee, nameDiscount.AppliedToDependent));
			}
		}
	}
}
