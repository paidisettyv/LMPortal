using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class CompanyLenderMap : EntityTypeConfiguration<CompanyLender>
    {
        public CompanyLenderMap()
        {
            // Primary Key
            this.HasKey(t => t.CompanyLenderId);

            // Properties
            // Table & Column Mappings
            this.ToTable("CompanyLender");
            this.Property(t => t.CompanyLenderId).HasColumnName("CompanyLenderId");
            this.Property(t => t.CompanyId).HasColumnName("CompanyId");
            this.Property(t => t.LenderId).HasColumnName("LenderId");
            this.Property(t => t.UserIdGranted).HasColumnName("UserIdGranted");
            this.Property(t => t.DateGranted).HasColumnName("DateGranted");
            this.Property(t => t.AccessTrueTime).HasColumnName("AccessTrueTime");
            this.Property(t => t.AccessLMX).HasColumnName("AccessLMX");
            this.Property(t => t.AccessBankVision).HasColumnName("AccessBankVision");

            // Relationships
            this.HasOptional(t => t.Company)
                .WithMany(t => t.CompanyLenders)
                .HasForeignKey(d => d.CompanyId);
            this.HasOptional(t => t.Lender)
                .WithMany(t => t.CompanyLenders)
                .HasForeignKey(d => d.LenderId);

        }
    }
}
