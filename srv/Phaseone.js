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
    { ID: '1', status: 'pending' },
    { ID: '2', status: 'pending' },
    { ID: '3', status: 'pending' }
  ];
  
  
  module.exports = cds.service.impl(async function () {
    console.log("Service initialized");
  
   //console.log("Server Local Time:", new Date().toLocaleString());
   //console.log("UTC Time:", new Date().toUTCString());
  
  
    this.on('jobStatus', req => {
      console.log("job status requested");
      return jobStatuses;
    });
  
  
    // Schedule the job to run at 11:35 AM IST
  schedule.scheduleJob('05 06 * * *', async () => {  
      try {  
          console.log("Started job at 11:35 AM IST");  
          const job = jobStatuses.find(job => job.ID === '1');  
          if (job) {  
              job.status = 'running';  
          }  
  
          setTimeout(async () => {  
              await fetchResignationData();  
              if (job) {  
                  job.status = 'completed';  
              }  
              console.log("Completed job at 11:38 AM IST");  
          }, 3 * 60 * 1000);  
      } catch (error) {  
          console.error("Error in job 1:", error);  
      }  
  });  
  
  // Schedule the job to run at 11:40 AM IST
  schedule.scheduleJob('10 06 * * *', async () => {  
      try {  
          console.log("Started job at 11:40 AM IST");  
          const job = jobStatuses.find(job => job.ID === '2');  
          if (job) {  
              job.status = 'running';  
          }  
  
          setTimeout(async () => {  
              await fetchResignationData();  
              if (job) {  
                  job.status = 'completed';  
              }  
              console.log("Completed job at 11:43 AM IST");  
          }, 3 * 60 * 1000);  
      } catch (error) {  
          console.error("Error in job 2:", error);  
      }  
  });  
  
  // Schedule the job to run at 11:45 AM IST
  schedule.scheduleJob('15 06 * * *', async () => {  
      try {  
          console.log("Started job at 11:45 AM IST");  
          const job = jobStatuses.find(job => job.ID === '3');  
          if (job) {  
              job.status = 'running';  
          }  
  
          setTimeout(async () => {  
              await fetchResignationData();  
              if (job) {  
                  job.status = 'completed';  
              }  
              console.log("Completed job at 11:48 AM IST");  
          }, 3 * 60 * 1000);  
      } catch (error) {  
          console.error("Error in job 3:", error);  
      }  
  });  
  
   // Immediate job for testing
  //  const now = new Date();
  //  now.setMinutes(now.getMinutes() + 2); // 2 minutes from now
  //  schedule.scheduleJob(now, async () => {
  //      try {
  //          console.log("Started immediate test job");
  //          const job = jobStatuses.find(job => job.ID === '1');
  //          if (job) {
  //              job.status = 'running';
  //          }
  
  //          setTimeout(async () => {
  //              await fetchResignationData();
  //              if (job) {
  //                  job.status = 'completed';
  //              }
  //              console.log("Completed immediate test job");
  //          }, 3 * 60 * 1000);
  //      } catch (error) {
  //          console.error("Error in immediate test job:", error);
  //      }
  //  });
  
  });
  
  async function fetchResignationData() {
  console.log("Function Started");
  }
  
  