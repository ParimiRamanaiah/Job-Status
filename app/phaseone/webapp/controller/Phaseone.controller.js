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
          var updateButtonState = (index, buttonId,iconId,idText) => {
              var data = oJobStatusModel.getData();
              //console.log(data);
              if (data && data.results.length > 0) {
                  var jobStatus = data.results[index].status;
                  var jobName = data.results[index].name;
                  var manualTriggerButton = this.getView().byId(buttonId);
                  var icon = this.getView().byId(iconId);
                  var text=this.getView().byId(idText);
                  if (jobStatus === 'running') {
                      manualTriggerButton.setEnabled(false);
                      icon.setSrc("sap-icon://in-progress");
                      icon.setSize("1rem");
                      icon.setColor("#FF0000");
                      icon.setVisible(true);
                      text.setText(jobName);
                  } else if(jobStatus==="completed"){
                      manualTriggerButton.setEnabled(true);
                      icon.setSrc("sap-icon://complete");
                      icon.setSize("1rem");
                      icon.setColor("#00FF00");
                      icon.setVisible(true);
                      text.setText(jobName);
                  }
                  else{
                    icon.setVisible(false);
                    text.setText("");
                  }
              } else {
                  console.log("Job status data is not available.");
              }
          };

          // First check
          oModel.read("/jobStatus", {
              success: (oData) => {
                  oJobStatusModel.setData(oData);
                  updateButtonState(0, "manualTriggerButton1","idIcon1","idText1");
                  updateButtonState(1, "manualTriggerButton2","idIcon2","idText2");
                  updateButtonState(2, "manualTriggerButton3","idIcon3","idText3");
              }
          });

          // Periodically refresh the model and update button state
          setInterval(() => {
              oModel.read("/jobStatus", {
                  success: (oData) => {
                      oJobStatusModel.setData(oData);
                      updateButtonState(0, "manualTriggerButton1","idIcon1","idText1");
                      updateButtonState(1, "manualTriggerButton2","idIcon2","idText2");
                      updateButtonState(2, "manualTriggerButton3","idIcon3","idText3");
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
                var sServiceUrl = "/odata/v2/user/";
                var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
                this.getView().setModel(oModel);
                oModel.read("/fetchJob", {
                });

                console.log("Success! one");
            },
      
            onManualTriggertwo: function () {
                var sServiceUrl = "/odata/v2/user/";
                var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
                this.getView().setModel(oModel);
                oModel.read("/letterJob", {
                });

                console.log("Success! two");
            },
      
            onManualTriggerthree: function () {
                var sServiceUrl = "/odata/v2/user/";
                var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
                this.getView().setModel(oModel);
                oModel.read("/reportJob", {
                });

                console.log("Success! three");
            },
    });
});