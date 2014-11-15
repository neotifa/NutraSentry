(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  bLogin */
    $(document).on("click", "#bLogin", function(evt)
    {
         activate_subpage("#userprofile");
         displayGreeting();
    });
    
        /* button  bViewProfile */
    $(document).on("click", "#bViewProfile", function(evt)
    {
         activate_subpage("#userprofile"); 
    });
    
        /* button  bAddRestriction */
    $(document).on("click", "#bAddRestriction", function(evt)
    {
         activate_subpage("#addrestriction"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

function getUserName() {
    return document.getElementById(iUserName).value.toString;
}

function displayGreeting() {
    document.getElementById(pGreeting).innerHTML = "Hello, " + getUserName() + "!";
}