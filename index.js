(function() {
    "use strict";

    var MyApp = window.MyApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

//    DevExpress.devices.current({ platform: "ios" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            
            navigationType: "navbar",
            navigation: [
              {
                title: "P.I. Calculator",
                action: "#calculator",
                icon: "doc"
              },
                {
                    title: "About",
                    action: "#about",
                    icon: "info"
                },
              {
                title: "Help",
                action: "#help",
                icon: "help"
              }
            ]
        });
        
        MyApp.app.router.register(":view", { view: "calculator" });
        MyApp.app.navigate();
    });
    
})();