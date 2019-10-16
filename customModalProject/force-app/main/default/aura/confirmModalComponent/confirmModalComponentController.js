({
    doInit: function (component, event, helper) {
        component.set("v.canProceed", false);
    },
    openModel: function(component, event, helper) {
        var modalDiv = component.find("modal");
        if (modalDiv) $A.util.removeClass(modalDiv, "slds-hide");
    },
   
    closeModel: function(component, event, helper) {
        var modalDiv = component.find("modal");
        if (modalDiv) $A.util.addClass(modalDiv, "slds-hide");
    },
   
    handleSubmit: function(component, event, helper) {
        alert('Your changes have been submitted');
        var modalDiv = component.find("modal");
        if (modalDiv) $A.util.addClass(modalDiv, "slds-hide");
    }
})
