define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/has","dojo/dom-class","dijit/form/ToggleButton","../../kernel"],function(e,t,s,o,i,n,r,u){var d=t([r],{groupName:"defaultGroup",declaredClass:"esri.dijit.analysis.GroupToggleButton",postMixInProperties:function(){this.inherited(arguments),this.unselectChannel="/ButtonGroup/"+this.groupName,o.subscribe(this.unselectChannel,this,"doUnselect")},postCreate:function(){this.inherited(arguments),n.add(this.domNode,"esriGroupButton")},doUnselect:function(e){e!==this&&this.checked&&this.set("checked",!1)},_setCheckedAttr:function(e){this.inherited(arguments),e&&o.publish(this.unselectChannel,[this]),n.toggle(this.focusNode,"esriGroupChecked",e)}});return i("extend-esri")&&s.setObject("dijit.analysis.GroupToggleButton",d,u),d});