sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], 
    function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("sap.training.exc.Controller.App", {
        
        // We extend the base controller with the following properties:
        onSayHello: function () {
            MessageBox.information("Hello User!");
        }

    });
    // A new subclass of sap.ui.core.mvc.Controller is created by calling the extend method, the created controller is set as
    // value of the module using the return method 
});