using Core.Schema.Dtos;
using Core.Schema.Interfaces;
using NUnit.Framework;

namespace Core.Services.Tests.Specifications.Discounts.FirstNameDiscounts
{
	public class WhenStartsWithFound : FirstNameDiscountContext
	{
		[Test]
		public void ShouldReturnCorrectDiscount()
		{
			Assert.AreEqual(100, _result);
		}

		private decimal _result;
		private IPerson _person;
		private decimal _originalCost;

		protected override void Because()
		{
			_result = DiscountUnderTest.GetDiscount(_person, _originalCost);
		}

		protected override void Context()
		{
			base.Context();
			_person = new EmployeeDto()
			{
				FirstName = "anne"
			};

			_originalCost = 1000m;
		}
	}
}
