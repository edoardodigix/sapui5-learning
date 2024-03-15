sap.ui.define([
    "sap/ui/core/UIComponent"
],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("sap.training.exc.Component", {

            // This property indicates that the external file manifest.json is used as descriptor for the controller (i.e.,
            // contains the metadata about the controller)
            metadata: {
                manifest: "json"
            },
            // With this property we implement the marker interface sap.ui.core.IAsyncContentCreation on the created subclass,
            // allowing for the UI component to be created fully asynchronously
            interfaces: ["sap.ui.core.IAsyncContentCreation"],


            // Mandatory override of the init method, where we must always make a super call to the init method of the base
            // class, in this case, no further initializations are made
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
            }

        });
    }
);

/* COMMENTS ON THE MANIFEST.JSON FILE */

// The content of the descriptor is structured using namespaces, like sap.app, sap.ui and sap.ui5

// Inside the sap.app namespace:
// The 'id' attribute is mandatory, its value must match the namespace provided in the relative Component.js file;
// The 'title' and 'description' attributes are used to specify title and description of the application, we can make
// these values language-dependent using the notation {{key}} and specifying each key in a file with extension .properties;
// In the 'i18n' attribute we must specify the path to the .properties file, usually located in the i18n directory
// The text in the title and description attributes can be read, e.g., by the SAP Fiori Launchpad

// Inside the sap.ui5 namespace:
// The libraries specified in the 'dependencies' property are loaded by the SAPUI5 core and can be used directly in
// the component's code;
// The 'rootView' attribute specifies the root view to open. I.e.,  when the component is instantiated and embedded in the
// UI, this view is automatically displayed as the initial view