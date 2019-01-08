({
    nullSearch : function(component, event, helper){
        var formSubmit = $A.get("e.c:FormSubmit");
        formSubmit.setParams({"eventAttribute" : ''})
        formSubmit.fire();
    },
    
 	doSearch : function(component, event, helper) {
        helper.onSearch(component, event);
 	},
    
    onBoatSelect: function(component, event, helper){
        component.set("v.selectedBoatId", event.getParam("boatId"));  
    }
})