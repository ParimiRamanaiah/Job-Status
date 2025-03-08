using {job as master} from '../db/schema';

service UserService{

        // entity JobStatus {
        // key ID: Integer;
        // status: String;
        // jobName:String;

        // }

        entity JobAuditLog as projection on master.JobAuditLog;

function jobStatus() returns array of {};

function fetchJob() returns array of {};

function letterJob() returns array of {};

function reportJob() returns array of {};

}