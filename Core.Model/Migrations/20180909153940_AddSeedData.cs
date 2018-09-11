using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Core.Model.Migrations
{
    public partial class AddSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Companies",
                columns: new[] { "CompanyId", "Name" },
                values: new object[] { 1, "Acme" });

            migrationBuilder.InsertData(
                table: "BenefitsCosts",
                columns: new[] { "BenefitsCostId", "CompanyId", "CreatedDate", "DependentCost", "EmployeeCost", "EndDate", "NumberOfPaychecks", "StartDate" },
                values: new object[] { 1, 1, new DateTime(2018, 9, 9, 9, 39, 39, 266, DateTimeKind.Local), 500m, 1000m, null, 26, new DateTime(2018, 9, 9, 9, 39, 39, 266, DateTimeKind.Local) });

            migrationBuilder.InsertData(
                table: "Discounts",
                columns: new[] { "DiscountId", "AppliedToDependent", "AppliedToEmployee", "CompanyId", "CreatedDate", "Discriminator", "EndDate", "StartDate", "Percent", "StartsWith" },
                values: new object[] { 1, true, true, 1, new DateTime(2018, 9, 9, 9, 39, 39, 266, DateTimeKind.Local), "NameDiscount", null, new DateTime(2018, 9, 9, 9, 39, 39, 266, DateTimeKind.Local), 10m, "A" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "BenefitsCosts",
                keyColumn: "BenefitsCostId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Discounts",
                keyColumn: "DiscountId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "CompanyId",
                keyValue: 1);
        }
    }
}
