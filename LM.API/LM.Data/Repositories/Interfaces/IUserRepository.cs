using System.Collections.Generic;
using LM.Data.DTOs;
using LM.Data.Models;

namespace LM.Data.Repositories.Interfaces
{
    public interface IUserRepository
    {
        void Add();
        void Update();
        void Delete();
        User GetByUserName(string username);
        ICollection<User> GetAll();
        LoginOutcome ValidateUserLoginDetails(string username, string password, string IPAddress,ref User usr);
        
    }
}
