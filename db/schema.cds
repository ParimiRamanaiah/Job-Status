namespace job;

entity JobAuditLog{
    key ID:Integer;
    jobName:String;
    triggeredBy:String;
    triggeredOn:String;
    status:String;
}
