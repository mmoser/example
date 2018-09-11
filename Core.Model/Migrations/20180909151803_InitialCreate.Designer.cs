﻿// <auto-generated />
using System;
using Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Core.Model.Migrations
{
    [DbContext(typeof(BenefitsContext))]
    [Migration("20180909151803_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.2-rtm-30932")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Core.Model.Entities.BenefitsCost", b =>
                {
                    b.Property<int>("BenefitsCostId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CompanyId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<decimal>("DependentCost");

                    b.Property<decimal>("EmployeeCost");

                    b.Property<DateTime?>("EndDate");

                    b.Property<int>("NumberOfPaychecks");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("BenefitsCostId");

                    b.HasIndex("CompanyId");

                    b.ToTable("BenefitsCosts");
                });

            modelBuilder.Entity("Core.Model.Entities.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("CompanyId");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("Core.Model.Entities.Discount", b =>
                {
                    b.Property<int>("DiscountId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("AppliedToDependent");

                    b.Property<bool>("AppliedToEmployee");

                    b.Property<int>("CompanyId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<DateTime?>("EndDate");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("DiscountId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Discounts");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Discount");
                });

            modelBuilder.Entity("Core.Model.Entities.NameDiscount", b =>
                {
                    b.HasBaseType("Core.Model.Entities.Discount");

                    b.Property<decimal>("Percent");

                    b.Property<string>("StartsWith");

                    b.ToTable("NameDiscount");

                    b.HasDiscriminator().HasValue("NameDiscount");
                });

            modelBuilder.Entity("Core.Model.Entities.BenefitsCost", b =>
                {
                    b.HasOne("Core.Model.Entities.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Core.Model.Entities.Discount", b =>
                {
                    b.HasOne("Core.Model.Entities.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}