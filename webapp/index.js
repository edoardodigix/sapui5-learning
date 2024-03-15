/* USING COMPONTENTS */

sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
    "use strict";

    // To render UI components, you must wrap them in a sap/ui/core/ComponentContainer and then use the placeAt method on it
    let oContainer = new ComponentContainer({
        id: "container", // ID of the component container instance to be created
        name: "sap.training.exc", // Name of the component to be instanciated 
        manifest: true, // Evaluate the manifest.json descriptor before the component controller
        async: true, // The component should be created asynchronously
        // The settings object is passed to the component instance when it is created, in this case it is used to set the
        // component instance ID:
        settings: {
            id: "sap.training.exc"
        }
    });
    oContainer.placeAt("content");

});


/* USING VIEWS */

// sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
//     "use strict";

//     XMLView.create({
//         id: "App",
//         viewName: "sap.training.exc.view.App" // The name of the view: the suffix .view.xml is automatically added; 
//                                               // view is the folder within webapp where the App view is located; 
//                                               // sap.training.exc is the namespace we defined in index.html to store the resource files
//     }).then(function (oView) {
//         oView.placeAt("content");
//     });
// // The loading process is asynchronous -> the create method does not return the view instance itself, but rather a promise that resolves with the view instance.
// // We can call the then method to define the callback function that gets executed as soon as the promise is resolved. The instance of the view is passed to the callback
// // function as a parameter, we can then add the view to an UI area using the placeAt method 
// });


/* USING DIRECTLY THE TEXT OBJECT */

// sap.ui.define(['sap/m/Text'], function (Text) {
//     'use strict';
//     new Text({text: "Hello World"}).placeAt("content");
// })