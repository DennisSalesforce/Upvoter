public class UpvoterHelper {
	@AuraEnabled 
    public static decimal getUpvotes(id CaseID){
        
        case toBeUpdatedCase = [select id, upvotes__c from case where id = :CaseID limit 1];
        decimal i = toBeUpdatedCase.Upvotes__c;
        system.debug('integer' + i);
        return i;
    }
    @AuraEnabled 	
    public static decimal UpdateVotes(id CaseID){

        case toBeUpdatedCase = [select id, upvotes__c, upvoted_by__c from case where id = :CaseID limit 1];
		
        //If(alreadyVoted(CaseID) ){
        //    return toBeUpdatedCase.Upvotes__c;
        //}
        
        string userid = UserInfo.getUserId();
        toBeUpdatedCase.Upvotes__c++;
        toBeUpdatedCase.Upvoted_by__c += ' - ' + userid;
        
		decimal newValue = toBeUpdatedCase.Upvotes__c;
        update toBeUpdatedCase;
        return newValue;
        
    }
    
    @AuraEnabled 	
    public static boolean alreadyVoted(id CaseID){
		boolean voted;
        string userid = UserInfo.getUserId();
        system.debug('user data' + userid);
        string searchString = '%'+userid+'%';
        case toBeUpdatedCase = [select upvoted_by__c from case where id = :CaseID and upvoted_by__c like :searchString];
		
        if (toBeUpdatedCase != null){
            voted = TRUE;
        } else {
            voted = FALSE;
        }
		system.debug('voted =' + voted);
        return voted;
        
    }
    
}