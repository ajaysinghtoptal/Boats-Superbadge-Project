({ 
    
    onFullDetails: function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({"recordId" : component.get("v.boat.Id")});
        navEvt.fire();
    },    
    
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.id",boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord() ;
    },
    
    onBoatReviewAdded : function(component, event, helper) {
        component.find("details").set("v.selectedTabId", "boatReviewtab");
    },
    
    onRecordUpdated : function(component, event, helper){
        //вызвать обновление на вкладке отзывов, вызывая публичный метод refresh
        var boat = component.get("v.boat");
        var boatReviewCmp = component.find("boatReviewCmp");  //boatReviewCmp - это aura:id для табки ревью
        var auraMethodResult = boatReviewCmp.refresh();
	},
    
})