using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserLoginMap : EntityTypeConfiguration<UserLogin>
    {
        public UserLoginMap()
        {
            // Primary Key
            this.HasKey(t => t.UserLoginId);

            // Properties
            // Table & Column Mappings
            this.ToTable("UserLogin");
            this.Property(t => t.UserLoginId).HasColumnName("UserLoginId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.DateCreated).HasColumnName("DateCreated");
            this.Property(t => t.DateAlive).HasColumnName("DateAlive");

            // Relationships
            this.HasOptional(t => t.User)
                .WithMany(t => t.UserLogins)
                .HasForeignKey(d => d.UserId);

        }
    }
}
