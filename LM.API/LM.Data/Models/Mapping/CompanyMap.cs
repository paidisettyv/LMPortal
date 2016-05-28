using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class CompanyMap : EntityTypeConfiguration<Company>
    {
        public CompanyMap()
        {
            // Primary Key
            this.HasKey(t => t.CompanyId);

            // Properties
            this.Property(t => t.CompanyName)
                .HasMaxLength(50);

            this.Property(t => t.CompanyBrand)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Company");
            this.Property(t => t.CompanyId).HasColumnName("CompanyId");
            this.Property(t => t.CompanyName).HasColumnName("CompanyName");
            this.Property(t => t.CompanyBrand).HasColumnName("CompanyBrand");
            this.Property(t => t.DateCreated).HasColumnName("DateCreated");
            this.Property(t => t.IsActive).HasColumnName("IsActive");
            this.Property(t => t.DateBlocked).HasColumnName("DateBlocked");
        }
    }
}
