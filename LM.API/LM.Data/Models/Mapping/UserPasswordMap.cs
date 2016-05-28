using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserPasswordMap : EntityTypeConfiguration<UserPassword>
    {
        public UserPasswordMap()
        {
            // Primary Key
            this.HasKey(t => t.UserPasswordId);

            // Properties
            this.Property(t => t.PasswordHash)
                .HasMaxLength(100);

            // Table & Column Mappings
            this.ToTable("UserPassword");
            this.Property(t => t.UserPasswordId).HasColumnName("UserPasswordId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.PasswordHash).HasColumnName("PasswordHash");
            this.Property(t => t.DateCreated).HasColumnName("DateCreated");

            // Relationships
            this.HasOptional(t => t.User)
                .WithMany(t => t.UserPasswords)
                .HasForeignKey(d => d.UserId);

        }
    }
}
