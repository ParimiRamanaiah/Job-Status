sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/ram/phaseone/model/models",
    "sap/ui/model/json/JSONModel",
     "sap/ui/model/odata/v2/ODataModel",

], (Controller, models,JSONModel, ODataModel) => {
    "use strict";

    return Controller.extend("com.ram.phaseone.controller.Phaseone", {
        onInit() {

            // var oJobStatusModel = models.createJobStatusModel();
            //             this.getView().setModel(oJobStatusModel, "jobStatus");

            //             // Function to update button state based on job status
            //             var updateButtonOneState = () => {
            //               var data = oJobStatusModel.getData();
            //               console.log(data);
            //               if (data && data.d && data.d.results && data.d.results.length > 0) {
            //                 var jobStatus = data.d.results[0].status;
            //                 var manualTriggerButton = this.getView().byId("manualTriggerButton1");
            //                 if (jobStatus === 'running') {
            //                   manualTriggerButton.setEnabled(false);
            //                 } else {
            //                   manualTriggerButton.setEnabled(true);
            //                   //clearInterval(intervalId);
            //                 }
            //               } else {
            //                 console.log("Job status data is not available.");
            //               }
            //             };

            //             var updateButtonTwoState = () => {
            //               var data = oJobStatusModel.getData();
            //               // console.log(data);
            //               if (data && data.d && data.d.results && data.d.results.length > 0) {
            //                 var jobStatus = data.d.results[1].status;
            //                 var manualTriggerButton = this.getView().byId("manualTriggerButton2");
            //                 if (jobStatus === 'running') {
            //                   manualTriggerButton.setEnabled(false);
            //                 } else {
            //                   manualTriggerButton.setEnabled(true);
            //                   //clearInterval(intervalId);
            //                 }
            //               } else {
            //                 console.log("Job status data is not available.");
            //               }
            //             };

            //             var updateButtonThreeState = () => {
            //               var data = oJobStatusModel.getData();
            //               //console.log(data);
            //               if (data && data.d && data.d.results && data.d.results.length > 0) {
            //                 var jobStatus = data.d.results[2].status;
            //                 var manualTriggerButton = this.getView().byId("manualTriggerButton3");
            //                 if (jobStatus === 'running') {
            //                   manualTriggerButton.setEnabled(false);
            //                 } else {
            //                   manualTriggerButton.setEnabled(true);
            //                   //clearInterval(intervalId);
            //                 }
            //               } else {
            //                 console.log("Job status data is not available.");
            //               }
            //             };



            //            //first check
            //             updateButtonOneState();
            //             updateButtonTwoState();
            //             updateButtonThreeState();

            //             // Periodically refresh the model and update button state
            //             setInterval(() => {
            //               oJobStatusModel.loadData("/odata/v2/user/JobStatus", null, false);
            //               oJobStatusModel.refresh(true); 
            //               updateButtonOneState(); 
            //               updateButtonTwoState(); 
            //               updateButtonThreeState();
            //             }, 5000);
            //           },

          var sServiceUrl = "/odata/v2/user/";
          var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
          this.getView().setModel(oModel);

          var oJobStatusModel = new JSONModel();
          this.getView().setModel(oJobStatusModel, "jobStatusModel");

          // Function to update button state based on job status
          // var updateButtonState = (index, buttonId,iconId,idText) => {
          //     var data = oJobStatusModel.getData();
          //     console.log(data);
          //     if (data && data.results.length > 0) {
          //         var jobStatus = data.results[index].status;
          //         var jobName = data.results[index].name;
          //         var manualTriggerButton = this.getView().byId(buttonId);
          //         var icon = this.getView().byId(iconId);
          //         var text=this.getView().byId(idText);
          //         if (jobStatus === 'running') {
          //             manualTriggerButton.setEnabled(false);
          //             icon.setSrc("sap-icon://in-progress");
          //             icon.setSize("1rem");
          //             icon.setColor("#FF0000");
          //             icon.setVisible(true);
          //             text.setText(jobName);
          //             if(buttonId === "manualTriggerButton1"){
          //               this.getView().byId("manualTriggerButton2").setEnabled(false);
          //               this.getView().byId("manualTriggerButton3").setEnabled(false);
          //             }
          //             else if(buttonId === "manualTriggerButton2"){
          //               this.getView().byId("manualTriggerButton1").setEnabled(false);
          //               this.getView().byId("manualTriggerButton3").setEnabled(false);

          //             }
          //             else if(buttonId=== "manualTriggerButton3"){
          //               this.getView().byId("manualTriggerButton2").setEnabled(false);
          //               this.getView().byId("manualTriggerButton1").setEnabled(false);
          //             }
          //         } else if(jobStatus==="completed"){
          //             manualTriggerButton.setEnabled(true);
          //             icon.setSrc("sap-icon://complete");
          //             icon.setSize("1rem");
          //             icon.setColor("#00FF00");
          //             icon.setVisible(true);
          //             text.setText(jobName);

          //             if(buttonId === "manualTriggerButton1"){
          //               this.getView().byId("manualTriggerButton2").setEnabled(true);
          //               this.getView().byId("manualTriggerButton3").setEnabled(true);
          //               data.results[index].status="pending"
          //             }
          //             else if(buttonId === "manualTriggerButton2"){
          //               this.getView().byId("manualTriggerButton1").setEnabled(true);
          //               this.getView().byId("manualTriggerButton3").setEnabled(true);
          //               data.results[index].status="pending"


          //             }
          //             else if(buttonId=== "manualTriggerButton3"){
          //               this.getView().byId("manualTriggerButton2").setEnabled(true);
          //               this.getView().byId("manualTriggerButton1").setEnabled(true);
          //               data.results[index].status="pending"

          //             }
          //         }
          //         else{
          //           icon.setVisible(false);
          //           text.setText("");
          //         }
          //     } else {
          //         console.log("Job status data is not available.");
          //     }
          // };

          // First check
          // oModel.read("/jobStatus", {
          //     success: (oData) => {
          //         oJobStatusModel.setData(oData);
          //         updateButtonState(0, "manualTriggerButton1","idIcon1","idText1");
          //         updateButtonState(1, "manualTriggerButton2","idIcon2","idText2");
          //         updateButtonState(2, "manualTriggerButton3","idIcon3","idText3");
          //     }
          // });

          // Periodically refresh the model and update button state
          // setInterval(() => {
          //     oModel.read("/jobStatus", {
          //         success: (oData) => {
          //             oJobStatusModel.setData(oData);
          //             updateButtonState(0, "manualTriggerButton1","idIcon1","idText1");
          //             updateButtonState(1, "manualTriggerButton2","idIcon2","idText2");
          //             updateButtonState(2, "manualTriggerButton3","idIcon3","idText3");
          //         }
          //     });
          // }, 5000);

          // Configuration for each job's UI elements
const jobConfigs = [
  { index: 0, buttonId: "manualTriggerButton1", iconId: "idIcon1", textId: "idText1" },
  { index: 1, buttonId: "manualTriggerButton2", iconId: "idIcon2", textId: "idText2" },
  { index: 2, buttonId: "manualTriggerButton3", iconId: "idIcon3", textId: "idText3" }
];


// Function to update the state of a single job's UI
const updateButtonState = (index, buttonId, iconId, idText, isAnyJobRunning, runningJobIndex) => {
  const data = oJobStatusModel.getData();
  if (data && data.results.length > index) {
    const jobStatus = data.results[index].status;
    const jobName = data.results[index].name;
    const manualTriggerButton = this.getView().byId(buttonId);
    const icon = this.getView().byId(iconId);
    const text = this.getView().byId(idText);

    if (jobStatus === 'running') {
      manualTriggerButton.setEnabled(false);
      icon.setSrc("sap-icon://in-progress");
      icon.setSize("1rem");
      icon.setColor("#FF0000");
      icon.setVisible(true);
      text.setText(jobName);
    } else if (jobStatus === "completed") {
      manualTriggerButton.setEnabled(!isAnyJobRunning);
      icon.setSrc("sap-icon://complete");
      icon.setSize("1rem");
      icon.setColor("#00FF00");
      icon.setVisible(true);
      text.setText(jobName);
    } else if (jobStatus === "failed") {
      manualTriggerButton.setEnabled(!isAnyJobRunning);
      icon.setSrc("sap-icon://error");
      icon.setSize("1rem");
      icon.setColor("#FF0000");
      icon.setVisible(true);
      text.setText(jobName);
    } else {
      manualTriggerButton.setEnabled(!isAnyJobRunning);
      icon.setVisible(false);
      text.setText("");
    }
  }
};

// Function to update all job buttons using the config array
const updateAllButtonStates = () => {
  const data = oJobStatusModel.getData();
  if (data && data.results.length > 0) {
    const runningJobIndex = data.results.findIndex(job => job.status === "running");
    const isAnyJobRunning = runningJobIndex !== -1;

    jobConfigs.forEach(config => {
      updateButtonState.call(this, config.index, config.buttonId, config.iconId, config.textId, isAnyJobRunning, runningJobIndex);
    });
  } else {
    console.log("Job status data is not available.");
  }
};

// Initial read
oModel.read("/jobStatus", {
  success: (oData) => {
    oJobStatusModel.setData(oData);
    updateAllButtonStates.call(this);
  }
});

// Periodic refresh
setInterval(() => {
  oModel.read("/jobStatus", {
    success: (oData) => {
      oJobStatusModel.setData(oData);
      updateAllButtonStates.call(this);
    }
  });
}, 5000);

        },
        


         //         onManualTriggerone: function () {
            //             console.log("Success! one");
            //         },

            //         onManualTriggertwo: function () {
            //           console.log("Success! two");
            //       },

            //       onManualTriggerthree: function () {
            //         console.log("Success! three");
            //     }

            onManualTriggerone: function () {
                this.getView().byId("manualTriggerButton2").setEnabled(false);
                this.getView().byId("manualTriggerButton3").setEnabled(false);
                var sServiceUrl = "/odata/v2/user/";
                var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
                this.getView().setModel(oModel);
                oModel.read("/fetchJob", {
                });

                console.log("Success! one");
            },
      
            onManualTriggertwo: function () {
                this.getView().byId("manualTriggerButton1").setEnabled(false);
                this.getView().byId("manualTriggerButton3").setEnabled(false);
                var sServiceUrl = "/odata/v2/user/";
                var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
                this.getView().setModel(oModel);
                oModel.read("/letterJob", {
                });

                console.log("Success! two");
            },
      
            onManualTriggerthree: function () {
                this.getView().byId("manualTriggerButton2").setEnabled(false);
                this.getView().byId("manualTriggerButton1").setEnabled(false);
                var sServiceUrl = "/odata/v2/user/";
                var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
                this.getView().setModel(oModel);
                oModel.read("/reportJob", {
                });

                console.log("Success! three");
            },
    });
});