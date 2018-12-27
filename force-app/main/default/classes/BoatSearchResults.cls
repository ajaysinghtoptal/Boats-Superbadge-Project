public class BoatSearchResults {
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(boatTypeId != ''){
            return [SELECT Id, Name, BoatType__c, Picture__c, Contact__r.Name
                    FROM Boat__c
                    WHERE BoatType__c =: boatTypeId];
        } else{
            return [SELECT Id, Name, BoatType__c, Picture__c, Contact__r.Name
                    FROM Boat__c];
        }
    }
}