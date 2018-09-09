using Microsoft.EntityFrameworkCore;

namespace Core.Model
{
	public partial class BenefitsContext : DbContext
	{
		public BenefitsContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
		{
				
		}
	}
}
