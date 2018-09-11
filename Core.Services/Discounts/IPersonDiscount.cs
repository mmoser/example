using Core.Schema.Interfaces;

namespace Core.Services.Discounts
{
	public interface IPersonDiscount
	{
		decimal GetDiscount(IPerson person, decimal originalCost);
		bool AppliedToEmployee { get; }
		bool AppliedToDependent { get; }
	}
}
