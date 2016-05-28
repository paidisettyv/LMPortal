using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserAccessMap : EntityTypeConfiguration<UserAccess>
    {
        public UserAccessMap()
        {
            // Primary Key
            this.HasKey(t => t.UserAccessId);

            // Properties
            // Table & Column Mappings
            this.ToTable("UserAccess");
            this.Property(t => t.UserAccessId).HasColumnName("UserAccessId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.AccessTypeId).HasColumnName("AccessTypeId");
            this.Property(t => t.UserIdGranted).HasColumnName("UserIdGranted");
            this.Property(t => t.DateGranted).HasColumnName("DateGranted");

            // Relationships
            this.HasOptional(t => t.User)
                .WithMany(t => t.UserAccesses)
                .HasForeignKey(d => d.UserId);
            this.HasOptional(t => t.UserAccessType)
                .WithMany(t => t.UserAccesses)
                .HasForeignKey(d => d.AccessTypeId);

        }
    }
}
