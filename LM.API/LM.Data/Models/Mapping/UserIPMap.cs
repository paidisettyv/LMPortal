using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserIPMap : EntityTypeConfiguration<UserIP>
    {
        public UserIPMap()
        {
            // Primary Key
            this.HasKey(t => t.UserIPId);

            // Properties
            this.Property(t => t.IPA)
                .HasMaxLength(50);

            this.Property(t => t.IPB)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("UserIP");
            this.Property(t => t.UserIPId).HasColumnName("UserIPId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.IPA).HasColumnName("IPA");
            this.Property(t => t.IPB).HasColumnName("IPB");
            this.Property(t => t.UserIdGranted).HasColumnName("UserIdGranted");
            this.Property(t => t.DateGranted).HasColumnName("DateGranted");

            // Relationships
            this.HasOptional(t => t.User)
                .WithMany(t => t.UserIPs)
                .HasForeignKey(d => d.UserId);

        }
    }
}
