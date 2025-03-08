const cds = require('@sap/cds');
const schedule = require('node-schedule');


// module.exports = cds.service.impl(async function () {

//   console.log("Service initialized");

//   const { JobStatus } = this.entities;

//   this.on('READ', 'JobStatus', async (req) => {
//     return await SELECT.from(JobStatus);
//   });

//   this.on('updateJobStatus', async (req) => {
//     const { status } = req.data;
//     await UPDATE(JobStatus).set({ status }).where({ ID: '1' });
//     return { status };
//   });


// // Schedule the job to run at 11:07 PM IST (which is 5:37 PM UTC)
// schedule.scheduleJob('37 17 * * *', async () => { // 11:07 PM IST is 5:37 PM UTC
//   console.log("Started job at 11:07 PM IST");
//   await cds.run(UPDATE(JobStatus).set({ status: 'running' }).where({ ID: '1' }));

//   // Call fetchResignationData after 3 minutes
//   setTimeout(async () => {
//     await fetchResignationData();
//     await cds.run(UPDATE(JobStatus).set({ status: 'completed' }).where({ ID: '1' }));
//     console.log("Completed job at 11:10 PM IST");
//   }, 3 * 60 * 1000); // 3 minutes in milliseconds
// });

// // Schedule the job to run at 11:09 PM IST (which is 5:39 PM UTC)
// schedule.scheduleJob('39 17 * * *', async () => { // 11:09 PM IST is 5:39 PM UTC
//   console.log("Started job at 11:09 PM IST");
//   await cds.run(UPDATE(JobStatus).set({ status: 'running' }).where({ ID: '2' }));

//   // Call fetchResignationData after 3 minutes
//   setTimeout(async () => {
//     await fetchResignationData();
//     await cds.run(UPDATE(JobStatus).set({ status: 'completed' }).where({ ID: '2' }));
//     console.log("Completed job at 11:12 PM IST");
//   }, 3 * 60 * 1000); // 3 minutes in milliseconds
// });

// // Schedule the job to run at 11:11 PM IST (which is 5:41 PM UTC)
// schedule.scheduleJob('41 17 * * *', async () => { // 11:11 PM IST is 5:41 PM UTC
//   console.log("Started job at 11:11 PM IST");
//   await cds.run(UPDATE(JobStatus).set({ status: 'running' }).where({ ID: '3' }));

//   // Call fetchResignationData after 3 minutes
//   setTimeout(async () => {
//     await fetchResignationData();
//     await cds.run(UPDATE(JobStatus).set({ status: 'completed' }).where({ ID: '3' }));
//     console.log("Completed job at 11:14 PM IST");
//   }, 3 * 60 * 1000); // 3 minutes in milliseconds
// });
// });

const jobStatuses = [
    { ID: '1', status: 'pending', name:''},
    { ID: '2', status: 'pending', name:''},
    { ID: '3', status: 'pending', name:''}
  ];
  
  
  module.exports = cds.service.impl(async function () {
    console.log("Service initialized");
  
   console.log("Server Local Time:", new Date().toLocaleString());
   console.log("UTC Time:", new Date().toUTCString());
  
   const { JobAuditLog }=this.entities;
  
    this.on('jobStatus', req => {
      console.log("job status requested");
      return jobStatuses;
    });
  
  // Schedule the job to run at 11:10 PM IST
schedule.scheduleJob('40 17 * * *', async () => {  
    try {  
        console.log("Started job at 11:10 PM IST");  
        const job = jobStatuses.find(job => job.ID === '1');  
        if (job) {  
            job.status = 'running';  
            job.name = 'Automation';
        }  

        setTimeout(async () => {  
            await fetchResignationData();  
            if (job) {  
                job.status = 'completed';  
                job.name = 'Automation';
            }  
            console.log("Completed job at 11:13 PM IST");  
        }, 3 * 60 * 1000);  
    } catch (error) {  
        console.error("Error in job 4:", error);  
    }  
});

// Schedule the job to run at 11:15 PM IST
schedule.scheduleJob('45 17 * * *', async () => {  
    try {  
        console.log("Started job at 11:15 PM IST");  
        const job = jobStatuses.find(job => job.ID === '2');  
        if (job) {  
            job.status = 'running';  
            job.name = 'Automation';
        }  

        setTimeout(async () => {  
            await fetchResignationData();  
            if (job) {  
                job.status = 'completed';  
                job.name = 'Automation';
            }  
            console.log("Completed job at 11:18 PM IST");  
        }, 3 * 60 * 1000);  
    } catch (error) {  
        console.error("Error in job 5:", error);  
    }  
});

// Schedule the job to run at 11:20 PM IST
schedule.scheduleJob('50 17 * * *', async () => {  
    try {  
        console.log("Started job at 11:20 PM IST");  
        const job = jobStatuses.find(job => job.ID === '3');  
        if (job) {  
            job.status = 'running';  
            job.name = 'Automation';
        }  

        setTimeout(async () => {  
            await fetchResignationData();  
            if (job) {  
                job.status = 'completed';  
                job.name = 'Automation';
            }  
            console.log("Completed job at 11:23 PM IST");  
        }, 3 * 60 * 1000);  
    } catch (error) {  
        console.error("Error in job 6:", error);  
    }  
});
  
   // Immediate job for testing
//    const now = new Date();
//    now.setMinutes(now.getMinutes() + 2); // 2 minutes from now
//    schedule.scheduleJob(now, async () => {
//        try {
//            console.log("Started immediate test job");
//            const job = jobStatuses.find(job => job.ID === '1');
//            if (job) {
//                job.status = 'running';
//                job.name='Automation'
//            }
  
//            setTimeout(async () => {
//                await fetchResignationData();
//                if (job) {
//                    job.status = 'completed';
//                    job.name='Automation'
//                }
//                console.log("Completed immediate test job");
//            }, 3 * 60 * 1000);
//        } catch (error) {
//            console.error("Error in immediate test job:", error);
//        }
//    });

   this.on('fetchJob',req=>{
    try {
        console.log("Started manual job");
        const job = jobStatuses.find(job => job.ID === '1');
        if (job) {
            job.status = 'running';
            job.name='Manual'
        }

        setTimeout(async () => {
            await fetchResignationData();
            if (job) {
                job.status = 'completed';
                job.name='Manual'
            }
            console.log("Completed manual job");

            // const ID=1;
            // const triggeredOn = new Date();
            // const jobName = "FetchJob";
            // const status = "Success";
            // const triggeredBy="Parimi Ramanaiah"
    
            
            // Insert audit log entry
        // await INSERT.into(JobAuditLog).entries({
        //     ID:ID,
        //     jobName:jobName,
        //     triggeredBy:triggeredBy,
        //     triggeredOn:triggeredOn,
        //     status:status
        // });

        INSERT.into (JobAuditLog) .columns (
            'ID', 'jobName', 'triggeredBy', 'triggeredOn','status'
         ) .values (
            1, 'FetchResignation', 'Parimi Ramanaiah', '2025-03-09','Success'
         )

        // const [data]=SELECT.from(JobAuditLog);
        // console.log(data);

        }, 3 * 60 * 1000);
    } catch (error) {
        console.error("Error in manual job:", error);
    }
   });

   this.on('letterJob',req=>{
    try {
        console.log("Started manual job");
        const job = jobStatuses.find(job => job.ID === '2');
        if (job) {
            job.status = 'running';
            job.name='Manual'
        }

        setTimeout(async () => {
            await fetchResignationData();
            if (job) {
                job.status = 'completed';
                job.name='Manual'
            }
            console.log("Completed manual job");
        }, 3 * 60 * 1000);
    } catch (error) {
        console.error("Error in manual job:", error);
    }
   });

   this.on('reportJob',req=>{
    try {
        console.log("Started manual job");
        const job = jobStatuses.find(job => job.ID === '3');
        if (job) {
            job.status = 'running';
            job.name='Manual'
        }

        setTimeout(async () => {
            await fetchResignationData();
            if (job) {
                job.status = 'completed';
                job.name='Manual'
            }
            console.log("Completed manual job");
        }, 3 * 60 * 1000);
    } catch (error) {
        console.error("Error in manual job:", error);
    }
   });
  
  });
  
  async function fetchResignationData() {
  console.log("Function Started");
  }
  
  