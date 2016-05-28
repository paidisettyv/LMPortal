using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserLoginAuditMap : EntityTypeConfiguration<UserLoginAudit>
    {
        public UserLoginAuditMap()
        {
            // Primary Key
            this.HasKey(t => t.UserLoginAuditId);

            // Properties
            this.Property(t => t.Username)
                .HasMaxLength(100);

            this.Property(t => t.PasswordPartial)
                .HasMaxLength(20);

            this.Property(t => t.IPAddress)
                .HasMaxLength(40);

            // Table & Column Mappings
            this.ToTable("UserLoginAudit");
            this.Property(t => t.UserLoginAuditId).HasColumnName("UserLoginAuditId");
            this.Property(t => t.DateCreated).HasColumnName("DateCreated");
            this.Property(t => t.Username).HasColumnName("Username");
            this.Property(t => t.PasswordPartial).HasColumnName("PasswordPartial");
            this.Property(t => t.OutcomeId).HasColumnName("OutcomeId");
            this.Property(t => t.IPAddress).HasColumnName("IPAddress");
        }
    }
}
