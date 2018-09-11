using System.Collections.Generic;
using Core.Schema.Interfaces;

namespace Core.Schema.Dtos
{
	public class EmployeeDto : IPerson
	{
		public string Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public IList<DependentDto> Dependents { get; set; }
	}
}
