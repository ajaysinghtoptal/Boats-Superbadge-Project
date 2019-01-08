({
	onBoatClick : function(component, event, helper) {
        var boatHighlightEvent = component.getEvent("BoatSelect");
        var boat = component.get('v.boat');
        boatHighlightEvent.setParams({"boatId" : boat.Id});
                
        boatHighlightEvent.fire();
        component.set("v.selected", 'true');  

        var boatForMapEvent = $A.get("e.c:PlotMapMarker");
        var boat = component.get('v.boat');
                
        boatForMapEvent.setParams({
            "sObjectId" : boat.Id,
            "label" : boat.Name,
            "lat" : boat.Geolocation__Latitude__s,
            "long" : boat.Geolocation__Longitude__s
        });
        boatForMapEvent.fire();
        component.set("v.selected", 'true');
        
        var boatDetailsEvent = $A.get("e.c:BoatSelected");  //Important! It's the finish step - final verification
        boatDetailsEvent.setParams({"boat" : boat});
        boatDetailsEvent.fire();
    },
})