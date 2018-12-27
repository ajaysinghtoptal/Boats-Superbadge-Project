({
    doInit : function(component, event, helper) {
        helper.getBoatTypes(component);
    },
    
    newBoat : function(component, event, helper){
    	var createRecordEvent = $A.get('e.force:createRecord');
        var boatTypeName = component.find('types').get('v.value');
        
        if (boatTypeName != 'allTypesValue') {
            createRecordEvent.setParams({
        		'entityApiName' : 'Boat__c',
         		'defaultFieldValues': {
            		'BoatType__c' : boatTypeName
        		}
    		});
        } else{
            createRecordEvent.setParams({
        		'entityApiName' : 'Boat__c'
    		});
        }
    	createRecordEvent.fire();
	},
})