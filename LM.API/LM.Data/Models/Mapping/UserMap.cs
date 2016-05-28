using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserMap : EntityTypeConfiguration<User>
    {
        public UserMap()
        {
            // Primary Key
            this.HasKey(t => t.UserId);

            // Properties
            this.Property(t => t.Username)
                .HasMaxLength(100);

            this.Property(t => t.Firstname)
                .HasMaxLength(30);

            this.Property(t => t.Surname)
                .HasMaxLength(30);

            this.Property(t => t.Email)
                .HasMaxLength(100);

            // Table & Column Mappings
            this.ToTable("User");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.CompanyId).HasColumnName("CompanyId");
            this.Property(t => t.Username).HasColumnName("Username");
            this.Property(t => t.Firstname).HasColumnName("Firstname");
            this.Property(t => t.Surname).HasColumnName("Surname");
            this.Property(t => t.Email).HasColumnName("Email");
            this.Property(t => t.IsActive).HasColumnName("IsActive");
            this.Property(t => t.DateCreated).HasColumnName("DateCreated");
            this.Property(t => t.UserIdCreated).HasColumnName("UserIdCreated");
            this.Property(t => t.DateBlocked).HasColumnName("DateBlocked");
            this.Property(t => t.ForceLogout).HasColumnName("ForceLogout");
        }
    }
}
