({
    getBoatTypes : function(component) {
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(actionResult) {
            var state = actionResult.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.types", actionResult.getReturnValue());
            }            
        });
        $A.enqueueAction(action);
    },
})