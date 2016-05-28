using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using LM.Data.Models.Mapping;

namespace LM.Data.Models
{
    public partial class LmPortalContext : DbContext
    {
        static LmPortalContext()
        {
            Database.SetInitializer<LmPortalContext>(null);
        }

        public LmPortalContext()
            : base("Name=LMPortalContext")
        {
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<CompanyIP> CompanyIPs { get; set; }
        public DbSet<CompanyLender> CompanyLenders { get; set; }
        public DbSet<Lender> Lenders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserAccess> UserAccesses { get; set; }
        public DbSet<UserAccessType> UserAccessTypes { get; set; }
        public DbSet<UserIP> UserIPs { get; set; }
        public DbSet<UserLogin> UserLogins { get; set; }
        public DbSet<UserLoginAudit> UserLoginAudits { get; set; }
        public DbSet<UserPassword> UserPasswords { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new CompanyMap());
            modelBuilder.Configurations.Add(new CompanyIPMap());
            modelBuilder.Configurations.Add(new CompanyLenderMap());
            modelBuilder.Configurations.Add(new LenderMap());
            modelBuilder.Configurations.Add(new UserMap());
            modelBuilder.Configurations.Add(new UserAccessMap());
            modelBuilder.Configurations.Add(new UserAccessTypeMap());
            modelBuilder.Configurations.Add(new UserIPMap());
            modelBuilder.Configurations.Add(new UserLoginMap());
            modelBuilder.Configurations.Add(new UserLoginAuditMap());
            modelBuilder.Configurations.Add(new UserPasswordMap());
        }
    }
}
