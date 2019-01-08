({
	onSearch : function(component, event) {
        var showBoatsByTypes = event.getParam("eventAttribute");
        var boatTypeId = component.get("v.boatTypeId");        
        var action = component.get("c.getBoats");
        action.setParams({boatTypeId : showBoatsByTypes });
       
        action.setCallback(this, function(actionResult) {
            var state = actionResult.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.boats", actionResult.getReturnValue());
            }            
        });
        $A.enqueueAction(action);
    },
})