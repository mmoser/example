using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Schema.Interfaces;

namespace Core.Services.Discounts
{
	public class FirstNameDiscount : IPersonDiscount
	{
		public bool AppliedToEmployee { get; }
		public bool AppliedToDependent { get; }
		private readonly bool _ignoreCase;
		private readonly decimal _percent;
		private readonly ImmutableHashSet<string> _startsWith;

		public FirstNameDiscount(string startsWith, decimal percent, bool ignoreCase, bool appliedToEmployee, bool appliedToDependent)
		{
			AppliedToEmployee = appliedToEmployee;
			AppliedToDependent = appliedToDependent;
			_ignoreCase = ignoreCase;
			_percent = percent / 100.0m;
			_startsWith = startsWith.Split(',').ToImmutableHashSet();
		}

		public decimal GetDiscount(IPerson person, decimal originalCost)
		{
			if (string.IsNullOrWhiteSpace(person.FirstName)) 
			{
				return 0m;
			}

			foreach (var startingString in _startsWith)
			{
				if (person.FirstName.StartsWith(startingString, _ignoreCase, CultureInfo.CurrentCulture))
				{
					return originalCost * _percent;
				}
			}

			return 0m;
		}
	}
}
