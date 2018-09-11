using Core.Model.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace Core.Model
{
	public partial class BenefitsContext : DbContext
	{
		public BenefitsContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
		{
						
		}

		public DbSet<Company> Companies { get; set; }
		public DbSet<BenefitsCost> BenefitsCosts { get; set; }
		public DbSet<Discount> Discounts { get; set; }
		public DbSet<NameDiscount> NameDiscounts { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
			SeedData(modelBuilder);
		}

		private void SeedData(ModelBuilder modelBuilder)
		{
			var date = DateTime.Now;
			modelBuilder.Entity<Company>().HasData(
				new Company { CompanyId = 1, Name = "Acme" }
				);

			modelBuilder.Entity<BenefitsCost>().HasData(
				new BenefitsCost { BenefitsCostId = 1, CompanyId = 1, CreatedDate = date, EmployeeCost = 1000, DependentCost = 500, NumberOfPaychecks = 26, StartDate = date }
				);

			modelBuilder.Entity<NameDiscount>().HasData(
				new NameDiscount { DiscountId = 1, CompanyId = 1, CreatedDate = date, StartDate = date, AppliedToDependent = true, AppliedToEmployee = true, Percent = 10, StartsWith = "A" }
				);
		}
	}
}
