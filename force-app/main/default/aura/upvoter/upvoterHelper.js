({		
       doInitHelper : function(component, event) {
		
        var caseID = component.get("v.recordId");
        
        var action = component.get("c.getUpvotes");
        action.setParams({CaseID : caseID});
        
        action.setCallback(this, function(response){
        var state = response.getState();
            if (state === "SUCCESS"){
            	
                var number = response.getReturnValue();
                component.set("v.votes", number);
                
                
            } else {
              
            }
       
            
                    
        });
        $A.enqueueAction(action);
        
	},
    
    doSubmitHelper : function(component, event) {
   
      
        var caseID = component.get("v.recordId");
        
        var action = component.get("c.UpdateVotes");
        action.setParams({CaseID : caseID});
        
        action.setCallback(this, function(response){
        var state = response.getState();
            if (state === "SUCCESS"){
           
                var number = response.getReturnValue();
                component.set("v.votes", number);
                component.set("v.alreadyVoted", true);
                
                
            } else {
                alert("Unknown error");
            }
       
            
                    
        });
        $A.enqueueAction(action);
         
    },
    		
       doInitHelperBoolean : function(component, event) {
		
        var caseID = component.get("v.recordId");
        
        var action = component.get("c.alreadyVoted");
        action.setParams({CaseID : caseID});
        
        action.setCallback(this, function(response){
        var state = response.getState();
            if (state === "SUCCESS"){
            	
                var boolean = response.getReturnValue();
                component.set("v.alreadyVoted", boolean);
                
                
            } else {
                
            }
       
            
                    
        });
        $A.enqueueAction(action);
        
	},
})