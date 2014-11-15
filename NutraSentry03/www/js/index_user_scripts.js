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
    
        /* list item  Placeholder Template */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         activate_subpage("#testpage"); 
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

function addToRestrictionsList(eName) {
    restrictionsList[restrictionsList.length] = document.getElementById(eName).label;
}

function generateRestrictionsList() {
    for (i = 0; i < restrictionsList.length; i++) {
        var n = restrictionsList[i].label;
        listText += "<li class="topcoat-list__item widget uib_w_10" data-uib="topcoat/list_item" data-ver="0">" + n + "</li>\n"
    }
}