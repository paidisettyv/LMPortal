namespace LM.Data
{
    public enum LoginOutcome
    {
        Successful=1,
        IpTemporarilyBlocked,
        CredentialsInvalid,
        UserTemporarilyBlocked,
        InvalidIP,
        UserLoggedIn,
        Error


    }
}
