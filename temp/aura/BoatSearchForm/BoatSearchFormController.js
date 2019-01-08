({
    doInit : function(component, event, helper) {
        helper.getBoatTypes(component);
    },
    
    handleBoatType : function(component, event, helper){
        component.set("v.selectedType", component.find("types").get("v.value"));
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
    
    onFormSubmit : function(component, event, helper){
        var boatTypeId = component.find("types").get("v.value");
        var formSubmit = $A.get("e.c:FormSubmit");
        formSubmit.setParams({"eventAttribute" : boatTypeId});
        formSubmit.fire();
    },
})