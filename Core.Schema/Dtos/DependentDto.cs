using Core.Schema.Interfaces;

namespace Core.Schema.Dtos
{
	public class DependentDto : IPerson
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
	}
}
