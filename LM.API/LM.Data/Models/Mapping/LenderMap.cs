using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class LenderMap : EntityTypeConfiguration<Lender>
    {
        public LenderMap()
        {
            // Primary Key
            this.HasKey(t => t.LenderId);

            // Properties
            this.Property(t => t.LenderName)
                .HasMaxLength(50);

            this.Property(t => t.LenderBrand)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Lender");
            this.Property(t => t.LenderId).HasColumnName("LenderId");
            this.Property(t => t.LenderName).HasColumnName("LenderName");
            this.Property(t => t.LenderBrand).HasColumnName("LenderBrand");
            this.Property(t => t.TrueTimeLenderId).HasColumnName("TrueTimeLenderId");
            this.Property(t => t.LMXLenderId).HasColumnName("LMXLenderId");
            this.Property(t => t.BankVisionLenderId).HasColumnName("BankVisionLenderId");
        }
    }
}
