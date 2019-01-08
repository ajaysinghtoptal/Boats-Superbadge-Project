({
    onInit : function(component, event) {
        var boat=component.get("v.boat"); 
        component.find("service").getNewRecord("BoatReview__c", // sObject type (entityApiName)
            	null, // recordTypeId
            	false, // skip cache?
            $A.getCallback(function() {
           		var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");                 
				if(error || (rec === null)) {
            		console.log("Error initializing record template: " + error);
         		} else {
                    console.log("We have initialised the AddReview OK" + boat.Id);                 
					component.set("v.boatReview.Boat__c", boat.Id);
         		}
			})
		); 
    },
})