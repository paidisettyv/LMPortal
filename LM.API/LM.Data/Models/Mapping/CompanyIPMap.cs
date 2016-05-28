using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class CompanyIPMap : EntityTypeConfiguration<CompanyIP>
    {
        public CompanyIPMap()
        {
            // Primary Key
            this.HasKey(t => t.CompanyIPId);

            // Properties
            this.Property(t => t.IPA)
                .HasMaxLength(50);

            this.Property(t => t.IPB)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("CompanyIP");
            this.Property(t => t.CompanyIPId).HasColumnName("CompanyIPId");
            this.Property(t => t.CompanyId).HasColumnName("CompanyId");
            this.Property(t => t.IPA).HasColumnName("IPA");
            this.Property(t => t.IPB).HasColumnName("IPB");
            this.Property(t => t.UserIdGranted).HasColumnName("UserIdGranted");
            this.Property(t => t.DateGranted).HasColumnName("DateGranted");

            // Relationships
            this.HasOptional(t => t.Company)
                .WithMany(t => t.CompanyIPs)
                .HasForeignKey(d => d.CompanyId);

        }
    }
}
