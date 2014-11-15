(function() 
{
 "use strict";
    
    var userName = "User";
    var restrictionList = {};
        
 document.addEventListener("app.Ready", register_event_handlers, false);

 /*
   hook up event handlers 
 */
function register_event_handlers()
{
    
    
     /* button  bViewProfile */
    $(document).on("click", "#bViewProfile", function(evt)
    {
         activate_subpage("#user_profile"); 
    });
    
        /* button  uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#new_user_signup"); 
    });
    
        /* button  bSubmitNewUser */
    $(document).on("click", "#bSubmitNewUser", function(evt)
    {
         activate_subpage("#user_profile"); 
    });
    
        /* button  bLogin */
    $(document).on("click", "#bLogin", function(evt)
    {
        userName = ddUserName.get();
         activate_subpage("#user_profile"); 
    });
 }   
})();
    