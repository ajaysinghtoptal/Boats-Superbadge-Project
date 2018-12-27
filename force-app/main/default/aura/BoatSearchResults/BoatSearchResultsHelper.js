({
	onSearch : function(component, event) {
        var boatTypId = component.get("v.boatTypeId");        
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId : 'a011t000009KDGNAA4'
        });
        
        action.setCallback(this, function(actionResult) {
            var state = actionResult.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.boats", actionResult.getReturnValue());
            }            
        });
        $A.enqueueAction(action);
    },
})