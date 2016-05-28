using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace LM.Data.Models.Mapping
{
    public class UserAccessTypeMap : EntityTypeConfiguration<UserAccessType>
    {
        public UserAccessTypeMap()
        {
            // Primary Key
            this.HasKey(t => t.UserAccessTypeId);

            // Properties
            this.Property(t => t.UserAccessTypeId)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(t => t.AccessDesc)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("UserAccessType");
            this.Property(t => t.UserAccessTypeId).HasColumnName("UserAccessTypeId");
            this.Property(t => t.AccessDesc).HasColumnName("AccessDesc");
        }
    }
}
