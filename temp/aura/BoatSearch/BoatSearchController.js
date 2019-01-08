({
	onFormSubmit : function(component, event, helper) {
		var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        
        var boatSearchResultsComponent = component.find("BoatSearchResultsAuraId");
        boatSearchResultsComponent.search(formData.boatTypeId);
	},
})